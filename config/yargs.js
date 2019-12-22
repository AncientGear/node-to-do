const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripción de la tarea por hacer',
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea',
}

const filter = {
    default: undefined,
    alias: 'c',
    type: 'boolean',
    desc: 'filter'
}

const argv = require('yargs')
            .command('crear', 'Crea un elemento por hacer', {
                descripcion
            })
            .command('actualizar', 'Actualiza el estado completo de una tarea', {
                descripcion,
                completado,
            })
            .command('borrar', 'Borra una tarea en base a la descripción enviada', {
                descripcion,
            })
            .command('listar', 'Lista las tareas por hacer que coincidan con el marametro -c',{
                filter,
            })
            .help()
            .argv;


module.exports = {
    argv,
}