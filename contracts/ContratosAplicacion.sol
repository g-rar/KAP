pragma solidity >=0.4.21 <0.7.0;
pragma experimental ABIEncoderV2;

contract ServiciosUsuario {
    Usuario[] usuarios;
    mapping(uint256 => uint256) usuariosMap;

    struct Usuario {
        string first_name;
        string last_name;
        string password;
        string email;
        uint256 telefono;
        string[] redes;
        uint256 cedula;
    }

    constructor() public {
        Usuario memory usuario_;
        Usuario memory usuario_2;
        Usuario memory usuario_3;
        Usuario memory usuario_4;
        Usuario memory usuario_5;

        usuario_.first_name = "Felipe";
        usuario_.last_name = "Pacheco Cerdas";
        usuario_.password = "felipe1";
        usuario_.email = "felipepace09@gmail.com";
        usuario_.telefono = 85858585;
        string[] memory rrss = new string[](2);
        rrss[0] = "Facebook: felipepace09";
        rrss[1] = "Instragram: felipe09";
        usuario_.redes = rrss;
        usuario_.cedula = 305280872;

        usuario_2.first_name = "Jeremy";
        usuario_2.last_name = "Tencio Morales";
        usuario_2.password = "jeremy1";
        usuario_2.email = "jdtm23@gmail.com";
        usuario_2.telefono = 75417878;
        string[] memory rrss2 = new string[](2);
        rrss2[0] = "Facebook: jdtm23";
        rrss2[1] = "Instragram: jdtm23";
        usuario_2.redes = rrss;
        usuario_2.cedula = 305210784;

        usuario_3.first_name = "Bernold";
        usuario_3.last_name = "Abarca Zúñiga";
        usuario_3.password = "bernold1";
        usuario_3.email = "bernoldaz@gmail.com";
        usuario_3.telefono = 70132088;
        string[] memory rrss3 = new string[](2);
        rrss3[0] = "Facebook: bernoldaz";
        rrss3[1] = "Instragram: bernoldaz";
        usuario_3.redes = rrss;
        usuario_3.cedula = 117890661;

        usuario_4.first_name = "Gerardo";
        usuario_4.last_name = "López";
        usuario_4.password = "g.rar1";
        usuario_4.email = "g.rar@gmail.com";
        usuario_4.telefono = 91479012;
        string[] memory rrss4 = new string[](2);
        rrss4[0] = "Facebook: g.rar";
        rrss4[1] = "Instragram: g.rar";
        usuario_4.redes = rrss;
        usuario_4.cedula = 117890666;

        usuario_5.first_name = "Arturo";
        usuario_5.last_name = "Vásquez";
        usuario_5.password = "arturo1";
        usuario_5.email = "arturo@gmail.com";
        usuario_5.telefono = 12215007;
        string[] memory rrss5 = new string[](2);
        rrss5[0] = "Facebook: arturo?";
        rrss5[1] = "Instragram: arturo?";
        usuario_5.redes = rrss;
        usuario_5.cedula = 12215007;

        usuariosMap[usuario_.cedula] = usuarios.length;
        usuarios.push(usuario_);
        usuariosMap[usuario_2.cedula] = usuarios.length;
        usuarios.push(usuario_2);
        usuariosMap[usuario_3.cedula] = usuarios.length;
        usuarios.push(usuario_3);
        usuariosMap[usuario_4.cedula] = usuarios.length;
        usuarios.push(usuario_4);
        usuariosMap[usuario_5.cedula] = usuarios.length;
        usuarios.push(usuario_5);
    }

    function agregarUsuario(Usuario memory _usuario)
        public
        returns (string memory)
    {
        if (usuariosMap[_usuario.cedula] == 0) {
            usuariosMap[_usuario.cedula] = usuarios.length;
            usuarios.push(_usuario);
            return "S";
        } else {
            return "F";
        }
    }

    function getUsuario(uint256 cedula)
        public
        view
        returns (Usuario memory usuario)
    {
        return usuarios[usuariosMap[cedula]];
    }

    function getUsuarios() public view returns (Usuario[] memory usuario) {
        return usuarios;
    }
}

contract ServiciosAcreditacion {
    Acreditacion[] acreditaciones;

    AspiranteAcreditacion[] aspirantes;

    struct AspiranteAcreditacion {
        uint256 idAcreditacion;
        uint256 idAspirante;
        string estado;
        string resultado;
        string descripcionResultado;
    }

    struct Acreditacion {
        string titulo;
        uint256 idAcreditacion;
        uint256 idAcreditador;
        string conocimiento;
        string tipoMedio;
        string[] contenidos;
        string descripcion;
        uint256 ignos;
        uint256 virtus;
    }

    constructor() public {
        Acreditacion memory acreditacion_;
        acreditacion_.titulo = "Java Basics";
        acreditacion_.idAcreditacion = 1;
        acreditacion_.idAcreditador = 305280872;
        acreditacion_.conocimiento = "Ciencias de la Computación";
        acreditacion_.tipoMedio = "Proyecto Programado";
        string[] memory ct = new string[](4);
        ct[0] = "Java Programming: Solving Problems with Software";
        ct[1] = "Java Programming: Arrays, Lists, and Structured Data";
        ct[2] = "Object Oriented Programming in Java";
        ct[3] = "Data Structures and Performance";
        acreditacion_.contenidos = ct;
        acreditacion_
            .descripcion = "Esta especialización está destinada a futuros desarrolladores de software con cierta experiencia en programación en al menos otro lenguaje de programación (por ejemplo, Python, C, JavaScript, etc.) que deseen poder resolver problemas más complejos utilizando a un diseño orientado a objetos con Java. Además de aprender Java, obtendrá experiencia con dos entornos de desarrollo Java (BlueJ y Eclipse), aprenderá a programar con interfaces gráficas de usuario y aprenderá a diseñar programas capaces de manejar grandes cantidades de datos. Estas habilidades de ingeniería de software son ampliamente aplicables en una amplia gama de industrias.";
        acreditacion_.ignos = 4;
        acreditacion_.virtus = 5;

        Acreditacion memory acreditacion_2;
        acreditacion_2.titulo = "Introducción a Filosofía";
        acreditacion_2.idAcreditacion = 2;
        acreditacion_2.idAcreditador = 305210784;
        acreditacion_2.conocimiento = "Ciencias Sociales y Humanas: Filosofía";
        acreditacion_2.tipoMedio = "Ensayo";
        string[] memory ct2 = new string[](6);
        ct2[0] = "¿Qué es la filosofía?";
        ct2[1] = "Moralidad: Objetiva, relativa o emocional";
        ct2[2] = "¿Qué es el conocimiento? ¿Tenemos alguno?";
        ct2[3] = "¿Tenemos alguna obligación de obeceder la ley?";
        ct2[4] = "Mentes, cerebros y computadoras";
        ct2[5] = "¿Las teorías científicas son verdaderas?";
        acreditacion_2.contenidos = ct2;
        acreditacion_2
            .descripcion = "Este curso le presentará algunas de las principales áreas de investigación en filosofía contemporánea. En cada módulo, un filósofo diferente lo guiará a través de algunas de las preguntas y cuestiones más importantes en su área de especialización. Comenzaremos tratando de entender qué es la filosofía, cuáles son sus objetivos y métodos característicos, y en qué se diferencia de otros temas. Luego, pasaremos el resto del curso obteniendo una visión general introductoria de varias áreas diferentes.";
        acreditacion_2.ignos = 3;
        acreditacion_2.virtus = 5;

        Acreditacion memory acreditacion_4;
        acreditacion_4.titulo = "Introducción a la Etnomusicología";
        acreditacion_4.idAcreditacion = 4;
        acreditacion_4.idAcreditador = 117890666;
        acreditacion_4.conocimiento = "Arte: Música";
        acreditacion_4.tipoMedio = "Curso";
        string[] memory ct4 = new string[](5);
        ct4[0] = "Orígenes espirituales de la música";
        ct4[1] = "Diversificación instrumental a lo largo de la historia";
        ct4[2] = "Música de Asia y Medio Oriente";
        ct4[3] = "Europa y la música de los burgueses";
        ct4[4] = "Época contemporánea: El fin de los periodos musicales ¿No?";
        acreditacion_4.contenidos = ct4;
        acreditacion_4
            .descripcion = "Con frecuencia damos la música por sentado en nuestra vida diaria. Pero al igual que la sociedad misma, la música tuvo un origen rudimentario que junto a esta fue evolucionando y formando parte fundamental de la identidad de muchas culturas. Cada una percibiendo la música de formas tan distintas como los instrumentos que usaban o los estilos que tocaban. En este curso pretendemos que el estudiante adquiera una apreciación por la identidad musical de las culturas más influyentes en la historia.";
        acreditacion_4.ignos = 3;
        acreditacion_4.virtus = 5;

        Acreditacion memory acreditacion_3;
        acreditacion_3.titulo = "Comunismo Chino";
        acreditacion_3.idAcreditacion = 3;
        acreditacion_3.idAcreditador = 117890661;
        acreditacion_3
            .conocimiento = "Ciencias Sociales y Humanas: Doctrina Política: Comunismo";
        acreditacion_3.tipoMedio = "Curso y Examen";
        string[] memory ct3 = new string[](5);
        ct3[0] = "¿Qué es el comunismo?";
        ct3[1] = "Influencia con Mao Tse Tung";
        ct3[2] = "Acciones implementadas";
        ct3[3] = "Repercusiones en la China actual";
        ct3[4] = "Futura destrucción del sistema capitalista estadounidense";
        acreditacion_3.contenidos = ct3;
        acreditacion_3
            .descripcion = "En esta acreditación se busca confirmar que el aspirante posea los conocimientos necesarios fundamentales sobre el comunismo chino. Con el fin de que el aspirante sea capaz de comprender las acciones políticas realizadas por el gobierno chino actual realizadas en base a los resultados obtenidos durante toda la historia en la vida del comunismo chino. La persona que obtenga esta acreditación sea capaz de apoyar y defender el comunismo chino contemporáneo en su lucha con el capitalismo estadounidense.";
        acreditacion_3.ignos = 3;
        acreditacion_3.virtus = 2;

        Acreditacion memory acreditacion_5;
        acreditacion_5.titulo = "Ceremonia del té";
        acreditacion_5.idAcreditacion = 5;
        acreditacion_5.idAcreditador = 117890661;
        acreditacion_5.conocimiento = "Arte: Ceremonias";
        acreditacion_5.tipoMedio = "Prueba práctica";
        string[] memory ct5 = new string[](6);
        ct5[0] = "Los Principios de Chanoyu";
        ct5[1] = "Conocimientos sobre los utencilios: Chawan, Chaire, Chasen, Chashaku, Hishaku, Chakin, Fukusa ";
        ct5[2] = "Kaiseki";
        ct5[3] = "Naka-dachi";
        ct5[4] = "Goza-iri";
        ct5[5] = "Usucha";
        acreditacion_5.contenidos = ct5;
        acreditacion_5
            .descripcion = "Se busca que el aspirante posea todos los conocimientos teoricos practicos acerca de los distintos elementos y procesos que son necesarios durante la elaboración de la ceremonia del té";
        acreditacion_5.ignos = 5;
        acreditacion_5.virtus = 4;

        acreditaciones.push(acreditacion_);
        acreditaciones.push(acreditacion_2);
        acreditaciones.push(acreditacion_3);
        acreditaciones.push(acreditacion_4);
        acreditaciones.push(acreditacion_5);

        AspiranteAcreditacion memory acreditacionAspirante_;
        acreditacionAspirante_.idAcreditacion = 1;
        acreditacionAspirante_.idAspirante = 12215007;
        acreditacionAspirante_.estado = "Finalizado";
        acreditacionAspirante_.resultado = "Aprobado";
        acreditacionAspirante_
            .descripcionResultado = "El curso fue aprobado con muy buenas calificaciones, logrando la comprensión de los contenidos";

        aspirantes.push(acreditacionAspirante_);

        AspiranteAcreditacion memory acreditacionAspirante_7;
        acreditacionAspirante_7.idAcreditacion = 2;
        acreditacionAspirante_7.idAspirante = 12215007;
        acreditacionAspirante_7.estado = "Finalizado";
        acreditacionAspirante_7.resultado = "Aprobado";
        acreditacionAspirante_7
            .descripcionResultado = "El curso fue aprobado con muy buenas calificaciones, logrando la comprensión de los contenidos";

        aspirantes.push(acreditacionAspirante_7);

        AspiranteAcreditacion memory acreditacionAspirante_8;
        acreditacionAspirante_8.idAcreditacion = 3;
        acreditacionAspirante_8.idAspirante = 305210784;
        acreditacionAspirante_8.estado = "Finalizado";
        acreditacionAspirante_8.resultado = "Aprobado";
        acreditacionAspirante_8
            .descripcionResultado = "El curso fue aprobado con muy buenas calificaciones, logrando la comprensión de los contenidos";

        aspirantes.push(acreditacionAspirante_8);
    }

    function agregarAcreditacion(Acreditacion memory _acreditacion)
        public
        returns (uint256)
    {
        _acreditacion.idAcreditacion = acreditaciones.length;
        acreditaciones.push(_acreditacion);
        return _acreditacion.idAcreditacion;
    }

    function getAcreditacion(uint256 idAcreditacion)
        public
        view
        returns (Acreditacion memory acreditacion)
    {
        for (uint256 i = 0; i < acreditaciones.length; i++) {
            if (acreditaciones[i].idAcreditacion == idAcreditacion) {
                return acreditaciones[i];
            }
        }
    }

    function setAceptadoRechazado(
        uint256 idAcreditacion,
        uint256 idAspirante,
        uint256 aceptado
    ) public returns (AspiranteAcreditacion memory acreditacionAspirante) {
        for (uint256 i = 0; i < aspirantes.length; i++) {
            if (
                aspirantes[i].idAcreditacion == idAcreditacion &&
                aspirantes[i].idAspirante == idAspirante
            ) {
                if (aceptado == 1) {
                    aspirantes[i].resultado = "Aceptado";
                } else {
                    aspirantes[i].resultado = "Rechazado";
                }
                aspirantes[i].estado = "Finalizado";
                return aspirantes[i];
            }
        }
    }

    function getAcreditaciones()
        public
        view
        returns (Acreditacion[] memory acreditacion)
    {
        return acreditaciones;
    }

    /* Aspirante */

    function agregarAspiranteAcreditacion(
        AspiranteAcreditacion memory _acreditacionAspirante
    ) public {
        aspirantes.push(_acreditacionAspirante);
    }

    function getAspiranteAcreditacion(uint256 idUsuario, uint256 idAcreditacion)
        public
        view
        returns (AspiranteAcreditacion memory acreditacionAspirante)
    {
        for (uint256 i = 0; i < aspirantes.length; i++) {
            if (
                aspirantes[i].idAcreditacion == idAcreditacion &&
                aspirantes[i].idAspirante == idUsuario
            ) return aspirantes[i];
        }
    }

    function getAspirantes()
        public
        view
        returns (AspiranteAcreditacion[] memory acreditacionAspirante)
    {
        return aspirantes;
    }

    function getAspirantesPorAcreditacion(uint256 idAcreditacion)
        public
        view
        returns (AspiranteAcreditacion[] memory acreditacionAspirante)
    {
        AspiranteAcreditacion[] memory res = new AspiranteAcreditacion[](
            aspirantes.length
        );
        uint256 j = 0;
        for (uint256 i = 0; i < aspirantes.length; i++) {
            if (aspirantes[i].idAcreditacion == idAcreditacion) {
                res[j] = aspirantes[i];
                j++;
            }
        }
        return res;
    }
}
