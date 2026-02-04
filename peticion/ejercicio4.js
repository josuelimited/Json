const EliminarPublicacionSiNoTieneComentarios = async (idPost) => {
    // 1️ Consultar publicaciones
    const resPosts = await fetch("http://localhost:3000/posts");
    const posts = await resPosts.json();

    const publicacion = posts.find(post => post.id === idPost);

    if (!publicacion) {
        console.log("La publicación no existe");
        return;
    }

    // 2️ Consultar comentarios
    const resComments = await fetch("http://localhost:3000/comments");
    const comments = await resComments.json();

    // 3️ Verificar si la publicación tiene comentarios
    const comentariosPublicacion = comments.filter(
        comment => comment.postId === idPost
    );

    if (comentariosPublicacion.length > 0) {
        console.log("No se puede eliminar la publicación porque tiene comentarios");
        return;
    }

    // 4️ Eliminar la publicación (DELETE)
    await fetch(`http://localhost:3000/posts/${idPost}`, {
        method: "DELETE"
    });

    // 5️ Validar eliminación
    const validar = await fetch(`http://localhost:3000/posts/${idPost}`);

    if (!validar.ok) {
        console.log("Publicación eliminada correctamente");
    } else {
        console.log("Error al eliminar la publicación");
    }
};

EliminarPublicacionSiNoTieneComentarios(5);