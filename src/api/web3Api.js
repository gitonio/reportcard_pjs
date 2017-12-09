import School from '../../build/contracts/School.json'
import ReportCard from '../../build/contracts/ReportCard.json'
import Web3 from 'web3'

const provider = new Web3.providers.HttpProvider('http://localhost:7545')
const contract = require('truffle-contract')
const school = contract(School)
const rc = contract(ReportCard)
school.setProvider(provider)
rc.setProvider(provider)

// Get Web3 so we can get our accounts.
const web3RPC = new Web3(provider);

web3RPC.eth.getAccountsPromise = function() {
  return new Promise(function(resolve, reject) {
    web3RPC.eth.getAccounts(function(e, accounts) {
      if (e != null) {
        reject(e);
      } else {
        resolve(accounts);
      }
    });
  });
};

web3RPC.eth.getContractInstance = function(vcontract, vaddress) {
  console.log('in');
  return new Promise(function(resolve, reject) {
    console.log('in2');
    // vcontract.at(vaddress, function(e, instance) {
    //   console.log('in3');
    //   if (e != null) {
    //     console.log('reject');
    //     reject(e);
    //   } else {
    //     console.log('resolve');
    //     resolve(instance);
    //   }
    // });
    try {
      var instance = vcontract.at(vaddress);
      resolve(instance);
      console.log('resolved instance');
    } catch (e) {
      console.log('in e');
      console.log(e);
      reject(e);

    }
  });
};

var toAscii = function(hex) {
  var str = '',
    i = 0,
    l = hex.length;
  if (hex.substring(0, 2) === '0x') {
    i = 2;
  }
  for (; i < l; i += 2) {
    var code = parseInt(hex.substr(i, 2), 16);
    if (code === 0)
      continue; // this is added
    str += String.fromCharCode(code);
  }
  return str;
};

var web3Api = {
  addSchool: function(schoolName) {
    return web3RPC.eth.getAccountsPromise().then(function(accounts) {
       return school.new( schoolName
      , {
        from: accounts[1],
        gas: 1500000
      }
      );
    }).then(function(result) {
      return result.address;
    });
  },

  getAccounts: function() {
    return web3RPC.eth.getAccountsPromise().then(function(accounts) {
      return accounts;
    });
  },

  getSchoolAddress: function() {
    // Get accounts.

    return school.deployed().then(function(schoolInstance) {
      console.log('schoolInstance:', schoolInstance);
      return schoolInstance.address;
    })
  },

  getReportCardAddress: function() {
    return rc.deployed().then(function(rcInstance) {
      console.log('rcInstance:', rcInstance);
      return rcInstance.address;
    })
  },

  getStudentName: function(rcAddress) {
    var rcInstance = rc.at(rcAddress);
    return rcInstance.getStudentName.call();

  },

  getStudentAddress: function(rcAddress) {
    var rcInstance = rc.at(rcAddress);
    return rcInstance.getStudentAddress.call();
  },

  getGPAGoal: function(rcAddress) {
    var rcInstance = rc.at(rcAddress);
    return rcInstance.getGPAGoal.call();
  },

  getSchoolName: function() {

    return school.deployed().then(function(schoolInstance) {
      //console.log('schoolInstance:', schoolInstance)
      return schoolInstance.getSchoolName();
    }).then(function(result) {

      console.log('web3api schoolname:' + web3RPC.toAscii(result));
      return web3RPC.toAscii(result);
    });

  },

  getSchoolNameByAddress: function(schoolAddress) {

    // return web3RPC.eth.getContractInstance(school, schoolAddress).then(function(schoolInstance) {
    //   console.log(schoolInstance);
    //   return schoolInstance.getSchoolName();
    // }).then(function(res) {
    //   console.log('schoolName:', res);
    //   return toAscii(res);
    // }).catch(function(e) {
    //   console.log(e);
    //   return 'No School Found';
    // });

    const schoolInstance = school.at(schoolAddress);
    console.log('sa:' , schoolAddress);
    return schoolInstance.getSchoolName().then(function(res){
      console.log('res', res);
      return toAscii(res);
    });



  },

  createReportCard: function(studentName, studentAddress) {
    return web3RPC.eth.getAccountsPromise().then(function(accounts) {
      console.log('creating rc', accounts);
      console.log('rc', rc);
      return rc.new(accounts[2], studentName, {
        from: accounts[1],
        gas: 1500000
      });
    }).then(function(result) {
      return result.address;
    });
  },

  enrollStudent: function(schoolAddress, reportCardAddress, studentName) {
    console.log('schoolAddress', schoolAddress);
    console.log('reportCardAddress', reportCardAddress);
    console.log('studentName', studentName);

    var rcInstance = rc.at(reportCardAddress);
    return web3RPC.eth.getAccountsPromise().then(function(accounts) {
      return rcInstance.enroll(schoolAddress, studentName, {
        from: accounts[1],
        gas: 500000
      });
    }).then(function(result) {
      return result.address;
    });
  },

  getReportCardBalance: function(reportCardAddress) {
    var rcInstance = rc.at(reportCardAddress);
    return rcInstance.getReportCardBalance.call(reportCardAddress).then(function(bal) {
      return bal.valueOf();
    });
  },

  enterGrades: function(reportCardAddress, subject, grade, parms) {
    var accounts;
    return web3RPC.eth.getAccountsPromise().then(function(acc) {
      accounts = acc;
      return accounts;
    }).then(function(accounts) {
      return school.deployed();
    }).then(function(si) {
      return si.enterGrades(reportCardAddress, subject, grade, {
        from: accounts[0],
        gas: 500000
      });
    });
  },

  getNumberOfGrades: function(reportCardAddress) {
    return school.deployed().then(function(si) {
      return si.getNumberOfGrades.call(reportCardAddress);
    })
  },

  getGrades: function(rca) {
    var schoolInstance;

    return school.deployed().then(function(instance) {
      schoolInstance = instance;
      return schoolInstance.getNumberOfGrades.call(rca);
    }).then(function(numGrades) {
      var items = [];
      for (var i = 0; i < numGrades.valueOf(); i++) {
        items[i] = i;
      }

      var actions = items.map(function(x) {
        return schoolInstance.listGrades.call(rca, x);
      })
      var results = Promise.all(actions); // pass array of promises
      return results.then(data => {
        console.log(data);
        var returnArray = [];
        for (var i = 0; i < data.length; i++) {
          returnArray.push({id: i, subject: data[i][1], grade: data[i][0].valueOf()
          });
        }
        return returnArray

      });

    })
  },

  getStudentList: function(schoolAddress) {
    var schoolInstance = school.at(schoolAddress);

    //return school.deployed().then(function(instance) {
    //  schoolInstance = instance;
    return schoolInstance.getNumberOfReportCards.call().then(function(numReportCards) {
      var items = [];
      for (var i = 0; i < numReportCards.valueOf(); i++) {
        items[i] = i;
      }
      var actions = items.map(schoolInstance.getStudentInfoById.call);
      var results = Promise.all(actions); // pass array of promises
      return results.then(data => {
        console.log(data);
        var returnArray = [];
        for (var i = 0; i < data.length; i++) {
          returnArray.push({id: i, name: data[i][0], reportcardAddress: data[i][1]
          });
        }
        return returnArray;

      });
    })
  },

  searchReportCard: function(reportcardAddress) {
    //let rc = rc.at(reportcardAddress);
    let action1 = web3Api.getStudentName(reportcardAddress);
    let action2 = web3Api.getStudentAddress(reportcardAddress);
    let actions = [action1, action2];
    let results = Promise.all(actions);
    console.log(results);
    return results;
  }
}
module.exports = web3Api;
