//En el caso de la ruta project, que sería una selección dentro de los proyectos, colocamos una función que recibe como parm
//el id del proyecto. Cuando inicializamos las rutas no le enviamos ningún argumento, por lo tanto necesitamos que si
//projectId es nulo coloque la ruta directamente, que la que necesitamos en el Route del AppRouter.


const constantRoutes = {
    home:'/',
    login: '/login',
    register:'/register',
    account:'/account',
    projects:'/projects',
    project: (projectId) => (projectId ? `/projects/:${projectId}` : '/projects/:projectId'),
    admin: { users: '/admin/users' }
}


export default constantRoutes;