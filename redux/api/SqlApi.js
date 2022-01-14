export default class SqlApi {
  constructor(api) {
    this.api = api
  }

  // Get Sql Config
  getSqlConfig = () => {
    return new Promise((resolve, reject) => {
      this.api.getConfigDatabaseSql((error, data) => {
        this.handleResponse(error, reject, resolve, data)
      })
    })
  }

  // update Sql Config
  updateSqlConfig = (input) => {
    return new Promise((resolve, reject) => {
      this.api.putConfigDatabaseSql(input.sql, (error, data) => {
        this.handleResponse(error, reject, resolve, data)
      })
    })
  }

  // Add Sql Config
  addSqlConfig = (input) => {
    alert(JSON.stringify(input.sql))
    return new Promise((resolve, reject) => {
      this.api.postConfigDatabaseSql(input.sql, (error, data) => {
        this.handleResponse(error, reject, resolve, data)
      })
    })
  }

  // delete Ldap Config
  deleteSqlConfig = (input) => {
    return new Promise((resolve, reject) => {
      this.api.deleteConfigDatabaseSqlByName(input, (error, data) => {
        this.handleResponse(error, reject, resolve, data)
      })
    })
  }

  // test LDAP Config
  testLdapConfig = (input) => {
    return new Promise((resolve, reject) => {
      this.api.postConfigDatabaseSqlTest(input, (error, data, response) => {
        this.handleResponse(error, reject, resolve, data)
      })
    })
  }

  handleResponse(error, reject, resolve, data) {
    if (error) {
      reject(error)
    } else {
      resolve(data)
    }
  }
}
