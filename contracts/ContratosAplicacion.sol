pragma solidity >=0.4.21 <0.7.0;
pragma experimental ABIEncoderV2;

contract ServiciosUsuario {
    Usuario[] usuarios;
    mapping (uint256 => uint256) usuariosMap;
    
    struct Usuario {
        string nombre;
        string apellidos;
        string contrasenna;
        string correoElectronico;
        uint256 numeroTelefonico;
        string[] redesSociales;
        uint256 cedula;
    }
    

    constructor() public {
        Usuario memory usuario_;
        
        usuario_.nombre = "Felipe Pacheco";
        usuario_.apellidos = "Pacheco Cerdas";
        usuario_.contrasenna = "felpudo";
        usuario_.correoElectronico = "felipepace09@gmail.com";
        usuario_.numeroTelefonico = 85858585;
        string[] memory rrss = new string[](2);
        rrss[0] = "Facebook: felipepace09";
        rrss[1] = "Instragram: felipe09";
        usuario_.redesSociales = rrss;
        usuario_.cedula = 305280872;
        
        usuariosMap[usuario_.cedula] = usuarios.length;
        usuarios.push(usuario_);
    }
    
    function agregarUsuario(Usuario memory _usuario) public {
        usuariosMap[_usuario.cedula] = usuarios.length;
        usuarios.push(_usuario);
    }
    
    function getUsuario(uint256 cedula) public view returns (Usuario memory usuario) {
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
        int ignos;
    }
    
    constructor() public {
        Acreditacion memory acreditacion_;
        acreditacion_.titulo = "Python Basics";
        acreditacion_.idAcreditacion = 1;
        acreditacion_.idAcreditador = 305280872;
        acreditacion_.conocimiento = "Ciencias de la Computacion: Lenguajes de Programacion";
        acreditacion_.tipoMedio = "Examen Práctico";
        string[] memory ct = new string[](2);
        ct[0] = "Funciones";
        ct[1] = "Excepciones";
        acreditacion_.contenidos = ct;
        acreditacion_.descripcion = "En este curso aprenderás sobre el arte y la ciencia del anime";
        acreditacion_.ignos = 0;
        acreditacion_.ignos = 0;
        
        acreditaciones.push(acreditacion_);
        
        AspiranteAcreditacion memory acreditacionAspirante_;
        acreditacionAspirante_.idAcreditacion = 1;
        acreditacionAspirante_.idAspirante = 302220222;
        acreditacionAspirante_.estado = "Finalizado";
        acreditacionAspirante_.resultado = "96: Aprobado";
        acreditacionAspirante_.descripcionResultado = "El curso fue aprobado con muy buenas calificaciones";
        
        aspirantes.push(acreditacionAspirante_);
    }
    
    function agregarAcreditacion(Acreditacion memory _acreditacion) public {
        acreditaciones.push(_acreditacion);
    }
    
    function getAcreditacion(string memory conocimiento, string memory titulo) public view returns (Acreditacion memory acreditacion) {
        for (uint256 i = 0; i < acreditaciones.length; i++) {
            if (keccak256(bytes(acreditaciones[i].conocimiento)) == keccak256(bytes(conocimiento)) && keccak256(bytes(acreditaciones[i].titulo)) == keccak256(bytes(titulo)))  
                return acreditaciones[i];
        }
    }
    
    function getAcreditaciones() public view returns (Acreditacion[] memory acreditacion) {
        return acreditaciones;
    }
    
    /* Aspirante */
    
    function agregarAspiranteAcreditacion(AspiranteAcreditacion memory _acreditacionAspirante) public {
        aspirantes.push(_acreditacionAspirante);
    }
    
    function getAspiranteAcreditacion(uint256 idUsuario, uint256 idAcreditacion) public view returns (AspiranteAcreditacion memory acreditacionAspirante) {
        for (uint256 i = 0; i < aspirantes.length; i++) {
            if (aspirantes[i].idAcreditacion == idAcreditacion && aspirantes[i].idAspirante == idUsuario)  
                return  aspirantes[i];
        }
    }
    
    function getAspirantes() public view returns (AspiranteAcreditacion[] memory acreditacionAspirante) {
        return aspirantes;
    }
    
    function getAspirantesPorAcreditacion(uint256 idAcreditacion) public view returns (AspiranteAcreditacion[] memory acreditacionAspirante) {
        AspiranteAcreditacion[] memory res = new AspiranteAcreditacion[](aspirantes.length);
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