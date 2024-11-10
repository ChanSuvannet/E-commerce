import './app-bar-search'
import './apps/user-list'
import './jwt'
import mock from './mock'
import './pages/datatable'
import './pages/faq'
import './pages/help-center'
import './pages/profile'

// Apps
import './apps/permissions'

// Dashboard

// forwards the matched request over network
mock.onAny().passThrough()
