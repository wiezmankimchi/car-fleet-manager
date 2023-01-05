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

import MainLayout from './layouts/MainLayout/MainLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/support" page={SupportPage} name="support" />
      <Route path="/alerts" page={AlertsPage} name="alerts" />
      <Set wrap={[MainLayout, ScaffoldLayout]} title="UserRoles" titleTo="userRoles" buttonLabel="New UserRole" buttonTo="newUserRole">
        <Route path="/user-roles/new" page={UserRoleNewUserRolePage} name="newUserRole" />
        <Route path="/user-roles/{id:Int}/edit" page={UserRoleEditUserRolePage} name="editUserRole" />
        <Route path="/user-roles/{id:Int}" page={UserRoleUserRolePage} name="userRole" />
        <Route path="/user-roles" page={UserRoleUserRolesPage} name="userRoles" />
      </Set>

      <Set wrap={[MainLayout, ScaffoldLayout]} title="Cars" titleTo="cars" buttonLabel="New Car" buttonTo="newCar">
        <Route path="/cars/new" page={CarNewCarPage} name="newCar" />
        <Route path="/cars/{id:Int}/edit" page={CarEditCarPage} name="editCar" />
        <Route path="/cars/{id:Int}" page={CarCarPage} name="car" />
        <Route path="/cars" page={CarCarsPage} name="cars" />
      </Set>
      <Set wrap={[MainLayout, ScaffoldLayout]} title="Drivers" titleTo="drivers" buttonLabel="New Driver" buttonTo="newDriver">
        <Route path="/drivers/new" page={DriverNewDriverPage} name="newDriver" />
        <Route path="/drivers/{id:Int}/edit" page={DriverEditDriverPage} name="editDriver" />
        <Route path="/drivers/{id:Int}" page={DriverDriverPage} name="driver" />
        <Route path="/drivers/{page:Int}/{limit:Int}" page={DriverDriversPage} name="driversPaged" />
        <Route path="/drivers" page={DriverDriversPage} name="drivers" />
      </Set>
      <Set wrap={[MainLayout, ScaffoldLayout]} title="Car Models" titleTo="carModelMakes" buttonLabel="New Car Model" buttonTo="newCarModelMake">
        <Route path="/car-model-makes/new" page={CarModelMakeNewCarModelMakePage} name="newCarModelMake" />
        <Route path="/car-model-makes/{id:Int}/edit" page={CarModelMakeEditCarModelMakePage} name="editCarModelMake" />
        <Route path="/car-model-makes/{id:Int}" page={CarModelMakeCarModelMakePage} name="carModelMake" />
        <Route path="/car-model-makes/{page:Int}/{limit:Int}" page={CarModelMakeCarModelMakesPage} name="carModelMakesPage" />
        <Route path="/car-model-makes" page={CarModelMakeCarModelMakesPage} name="carModelMakes" />
      </Set>
      <Set wrap={[MainLayout, ScaffoldLayout]} title="Car Brands" titleTo="carModels" buttonLabel="New Car Brand" buttonTo="newCarModel">
        <Route path="/car-models/new" page={CarModelNewCarModelPage} name="newCarModel" />
        <Route path="/car-models/{id:Int}/edit" page={CarModelEditCarModelPage} name="editCarModel" />
        <Route path="/car-models/{id:Int}" page={CarModelCarModelPage} name="carModel" />
        <Route path="/car-models/{page:Int}/{limit:Int}" page={CarModelCarModelsPage} name="carModelsPage" />
        <Route path="/car-models" page={CarModelCarModelsPage} name="carModels" />
      </Set>
      <Set wrap={[MainLayout, ScaffoldLayout]} title="Companies" titleTo="companies" buttonLabel="New Company" buttonTo="newCompany">
        <Route path="/companies/new" page={CompanyNewCompanyPage} name="newCompany" />
        <Route path="/companies/{id:Int}/edit" page={CompanyEditCompanyPage} name="editCompany" />
        <Route path="/companies/{id:Int}" page={CompanyCompanyPage} name="company" />
        <Route path="/companies" page={CompanyCompaniesPage} name="companies" />
      </Set>
      <Set wrap={[MainLayout, ScaffoldLayout]} title="Roles" titleTo="roles" buttonLabel="New Role" buttonTo="newRole">
        <Route path="/roles/new" page={RoleNewRolePage} name="newRole" />
        <Route path="/roles/{id:Int}/edit" page={RoleEditRolePage} name="editRole" />
        <Route path="/roles/{id:Int}" page={RoleRolePage} name="role" />
        <Route path="/roles" page={RoleRolesPage} name="roles" />
      </Set>

      <Private unauthenticated="login">
        <Set wrap={[MainLayout, ScaffoldLayout]} title="Users" titleTo="users" buttonLabel="New User" buttonTo="newUser">
          <Route path="/users" page={UserUsersPage} name="users" />
          <Route path="/users/new" page={UserNewUserPage} name="newUser" />
          <Route path="/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
          <Route path="/users/{id:Int}" page={UserUserPage} name="user" />
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
