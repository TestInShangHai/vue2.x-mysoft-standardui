import Axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const mock = new MockAdapter(Axios)

mock.onGet('/uilist').reply(200, require('./datas/uilist.json'))

mock.onGet('/login').reply(200, require('./datas/login.json'))

export default mock
