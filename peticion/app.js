const UsuariosActivosConPublicaciones = async () => {
    // 1️ Obtener usuarios
    const resUsers = await fetch("http://localhost:3000/users");
    const users = await resUsers.json();

    // 2️ Obtener publicaciones
    const resPosts = await fetch("http://localhost:3000/posts");
    const posts = await resPosts.json();

    // 3️ Filtrar usuarios activos
    const usuariosActivos = users.filter(user => user.active === true);

    // 4️ Mostrar resultado
    console.log("Usuarios activos y cantidad de publicaciones:");

    usuariosActivos.forEach(user => {
        const cantidadPublicaciones = posts.filter(
            post => post.userId === user.id
        ).length;

        console.log(
            `Usuario: ${user.name} - Publicaciones: ${cantidadPublicaciones}`
        );
    });
};

// Ejecución
UsuariosActivosConPublicaciones();