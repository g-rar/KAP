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

        usuario_.first_name = "Felipe Pacheco";
        usuario_.last_name = "Pacheco Cerdas";
        usuario_.password = "felpudo";
        usuario_.email = "felipepace09@gmail.com";
        usuario_.telefono = 85858585;
        string[] memory rrss = new string[](2);
        rrss[0] = "Facebook: felipepace09";
        rrss[1] = "Instragram: felipe09";
        usuario_.redes = rrss;
        usuario_.cedula = 305280872;

        usuariosMap[usuario_.cedula] = usuarios.length;
        usuarios.push(usuario_);
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
        acreditacion_.tipoMedio = "Curso";
        string[] memory ct = new string[](4);
        ct[0] = "Java Programming: Solving Problems with Software";
        ct[1] = "Java Programming: Arrays, Lists, and Structured Data";
        ct[2] = "Object Oriented Programming in Java";
        ct[3] = "Data Structures and Performance";
        acreditacion_.contenidos = ct;
        acreditacion_
            .descripcion = "Esta especialización está destinada a futuros desarrolladores de software con cierta experiencia en programación en al menos otro lenguaje de programación (por ejemplo, Python, C, JavaScript, etc.) que deseen poder resolver problemas más complejos utilizando a un diseño orientado a objetos con Java. Además de aprender Java, obtendrá experiencia con dos entornos de desarrollo Java (BlueJ y Eclipse), aprenderá a programar con interfaces gráficas de usuario y aprenderá a diseñar programas capaces de manejar grandes cantidades de datos. Estas habilidades de ingeniería de software son ampliamente aplicables en una amplia gama de industrias.";
        acreditacion_.ignos = 5;
        acreditacion_.ignos = 5;

        Acreditacion memory acreditacion_2;
        acreditacion_2.titulo = "Introducción a Filosofía";
        acreditacion_2.idAcreditacion = 2;
        acreditacion_2.idAcreditador = 305280872;
        acreditacion_2
            .conocimiento = "Ciencias Sociales y Humanas: Filosofía: PUTA";
        acreditacion_2.tipoMedio = "Curso";
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
        acreditacion_2.ignos = 5;
        acreditacion_2.ignos = 5;

        acreditaciones.push(acreditacion_);
        acreditaciones.push(acreditacion_2);

        AspiranteAcreditacion memory acreditacionAspirante_;
        acreditacionAspirante_.idAcreditacion = 1;
        acreditacionAspirante_.idAspirante = 302220222;
        acreditacionAspirante_.estado = "Finalizado";
        acreditacionAspirante_.resultado = "96: Aprobado";
        acreditacionAspirante_
            .descripcionResultado = "El curso fue aprobado con muy buenas calificaciones";

        aspirantes.push(acreditacionAspirante_);
    }

    function agregarAcreditacion(Acreditacion memory _acreditacion) public {
        acreditaciones.push(_acreditacion);
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
