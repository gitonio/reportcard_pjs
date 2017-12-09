import React from 'react';
import Welcome from './components/welcome/welcomePage';
import Admin from './components/admin/AddSchoolContainer';
import AddSchoolForm from './components/admin/AddSchoolForm';
import Teacher from './components/teacher/teacherPage';
import Student from './components/student/studentPage';
import Parent from './components/parent/parentPage';
import ManageParentForm from './components/parent/manageParentForm';
import CreateReportCard from './components/parent/manageCreateReportCardForm';
import Enroll from './components/parent/manageEnrollForm';
import ManageEnterGradesForm from './components/teacher/manageEnterGradesForm';
import ManageListGrades from './components/common/manageListGrades';
import SchoolFormContainer from './components/school/schoolFormContainer';

import { Switch, Route } from 'react-router-dom';
const Main = () => (
  <main>
    <Switch>
      <Route  exact path='/' component={Welcome}/>
      <Route path='/admin' component={Admin}/>
      <Route path='/addschool' component={AddSchoolForm}/>
      <Route path='/teacher' component={Teacher}/>
      <Route path='/parent' component={Parent}/>
      <Route path='/parentdo' component={ManageParentForm}/>
      <Route path='/student' component={Student}/>
      <Route path='/enroll' component={Enroll}/>
      <Route path='/createreportcard' component={CreateReportCard}/>
      <Route path='/enterGrades/:address/:reportcardName' component={ManageEnterGradesForm}/>
      <Route path='/listGrades/:address/:reportcardName' component={ManageListGrades}/>
      <Route path='/school' component={SchoolFormContainer}/>
    </Switch>
  </main>
)

export default Main;
