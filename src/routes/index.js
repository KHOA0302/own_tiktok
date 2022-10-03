import Home from '~/pages/Home'
import Upload from '~/pages/Upload'
import Header from '~/layout/DefaultLayout/Header'


const publicRoutes = [
    { path: '/', element: <Home /> },
    { path: '/upload', element: <Upload />, layout: Header },
]

const privateRoutes = []

export { publicRoutes, privateRoutes } 