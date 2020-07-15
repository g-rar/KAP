pragma solidity >=0.4.21 <0.7.0;
pragma experimental ABIEncoderV2;

contract ServiciosUsuario {
    Usuario[] usuarios;
    mapping(uint256 => uint256) usuariosMap;

    struct Usuario {
        string nombre;
        uint256 cedula;
    }

    constructor() public {
        Usuario memory usuario_;
        usuario_.nombre = "User 1";
        usuario_.cedula = 1;
        usuariosMap[usuario_.cedula] = usuarios.length;
        usuarios.push(usuario_);
    }

    function agregarUsuario(Usuario memory _usuario) public {
        usuariosMap[_usuario.cedula] = usuarios.length;
        usuarios.push(_usuario);
    }

    function getUsuario(uint256 id)
        public
        view
        returns (Usuario memory usuario)
    {
        return usuarios[usuariosMap[id]];
    }

    function getUsuarios() public view returns (Usuario[] memory usuario) {
        return usuarios;
    }
}

contract ServiciosAcreditacion {
    Acreditacion[] acreditaciones;
    mapping(uint256 => uint256) acreditacionesMap;

    AspiranteAcreditacion[] aspirantes;

    struct AspiranteAcreditacion {
        uint256 idAcreditacion;
        uint256 idAspirante;
    }

    struct Acreditacion {
        string nombre;
        uint256 idAcreditacion;
        uint256 idUsuario;
        int256 ignos;
    }

    constructor() public {
        Acreditacion memory acreditacion_;
        acreditacion_.nombre = "Python Basics";
        acreditacion_.idAcreditacion = 1;
        acreditacion_.idUsuario = 1;
        acreditacion_.ignos = 100;

        acreditacionesMap[acreditacion_.idAcreditacion] = acreditaciones.length;
        acreditaciones.push(acreditacion_);
    }

    function agregarAcreditacion(Acreditacion memory _acreditacion) public {
        acreditacionesMap[_acreditacion.idAcreditacion] = acreditaciones.length;
        acreditaciones.push(_acreditacion);
    }

    function getAcreditacion(uint256 id)
        public
        view
        returns (Acreditacion memory acreditacion)
    {
        return acreditaciones[acreditacionesMap[id]];
    }

    function getAcreditacions()
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
        return AspiranteAcreditacion(0, 0);
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
