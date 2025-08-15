import { useState, useRef, useEffect } from "react";

function VideoPlayer( { videoActivo, setVideoActivo}) {


  const [videos, setVideos] = useState([]); // Lista de videos desde la API  
  const videoRefs = useRef([]);

  
  
  
  // 🔹 Función para obtener los videos desde la API
  const obtenerVideos = async () => {

    //let UrlVideos = "https://filesmsb.sfo3.cdn.digitaloceanspaces.com/gallos/";
    let UrlVideos = "//filesmsb.sfo3.cdn.digitaloceanspaces.com/gallos/";

    fetch("https://api.keskplay.com/api/gallos/combate", {
        method: "GET", // or 'PUT'        
        headers: {
          "Accept":"application/json",
          "Content-Type": "application/json",
  
        },
      })
        .then((res) => res.json())
        .catch((error) => { swal("Disculpe","Fallo en la conexion","error"); console.error(error); setLoading(false); })
        .then((response) => {
            //videos.push(UrlVideos+response.videoMP4);
            console.log(response.video);
            setVideos([
                        UrlVideos+response.video
                    ]);            
            
        } );
  
          //
        



  };

  // 🔹 Función que determina qué video reproducir
  const evaluarCondicion = () => {
    if (videos.length > 0) {
      const indice = Math.floor(Math.random() * videos.length); // Simula una evaluación
      setVideoActivo(indice);
    }
  };

  // 🔹 Ejecutar la API al montar el componente
  useEffect(() => {
    obtenerVideos();
  }, []);

  // 🔹 Evaluar qué video reproducir cuando se carguen los videos
  useEffect(() => {
    if (videos.length > 0) {
      //evaluarCondicion();
     
    }

    
  }, [videos]);

  // 🔹 Reproducir solo el video seleccionado
  useEffect(() => {
    if (videoActivo !== null) {
      videoRefs.current.forEach((video, i) => {
        if (video) {
          if (i === videoActivo) {
            video.play();
          } else {
            video.pause();
            video.currentTime = 0; // Reinicia los otros videos
          }
        }
      });
    }
  }, [videoActivo]);

  return (
    <div style={{ textAlign: "center"}}>
      

        <div>
            {videos.map((video, index) => (
            <video            
                id="video_carrera"
                key={index}
                ref={(el) => (videoRefs.current[index] = el)}                        
                preload="auto"
                style={{ display: index === videoActivo ? "block" : "none" }} // Oculta los videos no activos
            >
                <source src={video} type="video/mp4" />
                Tu navegador no soporta el elemento de video.
            </video>
            ))}
        </div>
    </div>
  );
}

export default VideoPlayer;
