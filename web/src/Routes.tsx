// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route, Private } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/alerts" page={AlertsPage} name="alerts" />
      <Set wrap={ScaffoldLayout} title="UserRoles" titleTo="userRoles" buttonLabel="New UserRole" buttonTo="newUserRole">
        <Route path="/user-roles/new" page={UserRoleNewUserRolePage} name="newUserRole" />
        <Route path="/user-roles/{id:Int}/edit" page={UserRoleEditUserRolePage} name="editUserRole" />
        <Route path="/user-roles/{id:Int}" page={UserRoleUserRolePage} name="userRole" />
        <Route path="/user-roles" page={UserRoleUserRolesPage} name="userRoles" />
      </Set>
      <Set wrap={ScaffoldLayout} title="UserCompanies" titleTo="userCompanies" buttonLabel="New UserCompany" buttonTo="newUserCompany">
        <Route path="/user-companies/new" page={UserCompanyNewUserCompanyPage} name="newUserCompany" />
        <Route path="/user-companies/{id:Int}/edit" page={UserCompanyEditUserCompanyPage} name="editUserCompany" />
        <Route path="/user-companies/{id:Int}" page={UserCompanyUserCompanyPage} name="userCompany" />
        <Route path="/user-companies" page={UserCompanyUserCompaniesPage} name="userCompanies" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Cars" titleTo="cars" buttonLabel="New Car" buttonTo="newCar">
        <Route path="/cars/new" page={CarNewCarPage} name="newCar" />
        <Route path="/cars/{id:Int}/edit" page={CarEditCarPage} name="editCar" />
        <Route path="/cars/{id:Int}" page={CarCarPage} name="car" />
        <Route path="/cars" page={CarCarsPage} name="cars" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Drivers" titleTo="drivers" buttonLabel="New Driver" buttonTo="newDriver">
        <Route path="/drivers/new" page={DriverNewDriverPage} name="newDriver" />
        <Route path="/drivers/{id:Int}/edit" page={DriverEditDriverPage} name="editDriver" />
        <Route path="/drivers/{id:Int}" page={DriverDriverPage} name="driver" />
        <Route path="/drivers" page={DriverDriversPage} name="drivers" />
      </Set>
      <Set wrap={ScaffoldLayout} title="CarModelMakes" titleTo="carModelMakes" buttonLabel="New CarModelMake" buttonTo="newCarModelMake">
        <Route path="/car-model-makes/new" page={CarModelMakeNewCarModelMakePage} name="newCarModelMake" />
        <Route path="/car-model-makes/{id:Int}/edit" page={CarModelMakeEditCarModelMakePage} name="editCarModelMake" />
        <Route path="/car-model-makes/{id:Int}" page={CarModelMakeCarModelMakePage} name="carModelMake" />
        <Route path="/car-model-makes" page={CarModelMakeCarModelMakesPage} name="carModelMakes" />
      </Set>
      <Set wrap={ScaffoldLayout} title="CarModels" titleTo="carModels" buttonLabel="New CarModel" buttonTo="newCarModel">
        <Route path="/car-models/new" page={CarModelNewCarModelPage} name="newCarModel" />
        <Route path="/car-models/{id:Int}/edit" page={CarModelEditCarModelPage} name="editCarModel" />
        <Route path="/car-models/{id:Int}" page={CarModelCarModelPage} name="carModel" />
        <Route path="/car-models" page={CarModelCarModelsPage} name="carModels" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Companies" titleTo="companies" buttonLabel="New Company" buttonTo="newCompany">
        <Route path="/companies/new" page={CompanyNewCompanyPage} name="newCompany" />
        <Route path="/companies/{id:Int}/edit" page={CompanyEditCompanyPage} name="editCompany" />
        <Route path="/companies/{id:Int}" page={CompanyCompanyPage} name="company" />
        <Route path="/companies" page={CompanyCompaniesPage} name="companies" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Roles" titleTo="roles" buttonLabel="New Role" buttonTo="newRole">
        <Route path="/roles/new" page={RoleNewRolePage} name="newRole" />
        <Route path="/roles/{id:Int}/edit" page={RoleEditRolePage} name="editRole" />
        <Route path="/roles/{id:Int}" page={RoleRolePage} name="role" />
        <Route path="/roles" page={RoleRolesPage} name="roles" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Users" titleTo="users" buttonLabel="New User" buttonTo="newUser">
        <Route path="/users/new" page={UserNewUserPage} name="newUser" />
        <Route path="/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
        <Route path="/users/{id:Int}" page={UserUserPage} name="user" />
      </Set>
      <Private unauthenticated="login">
        <Set wrap={ScaffoldLayout} title="Users" titleTo="users" buttonLabel="New User" buttonTo="newUser">
          <Route path="/users" page={UserUsersPage} name="users" />
        </Set>
      </Private>
      <Route path="/dashboard" page={DashboardPage} name="dashboard" />
      <Route path="/" page={HomePage} name="home" />
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
