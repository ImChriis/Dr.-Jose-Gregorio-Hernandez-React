import React, { useEffect, useRef } from "react";
import formation from '../assets/formation.jpg';
import medicine from '../assets/medicine.jpg';
import religion from '../assets/religion.png';
import legacy from '../assets/legacy.jpg';
import child from '../assets/childhood.jpg';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Biografy: React.FC = () => {
  const sectionsRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      if (section) {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "restart none none none",
              onEnter: () => {},
              onLeaveBack: () => {
                gsap.set(section, { opacity: 0, y: 50 });
              }
            }
          }
        );
      }
    });
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
      <div id="biography" className="w-full min-h-screen p-8 space-y-4 flex items-center justify-center flex-col gap-32">
          <h1 className="text-4xl font-bold text-white">Bibliografía</h1>

      <div
        className="flex items-center space-x-4 w-[90%]"
        ref={el => { sectionsRef.current[0] = el; }}
      >
        <img src={child} alt="José Gregorio Hernández" className="w-[30%] h-full object-cover rounded" />
        <div className="flex flex-col space-y-4 text-wrap w-[50%]">
          <h1 className="text-2xl font-bold">Infancia y origenes</h1>
          <p className="text-wrap-normal text-lg">José Gregorio Hernández Cisneros nació el 26 de octubre de 1864 en Isnotú, un pequeño pueblo enclavado en las montañas del estado Trujillo, Venezuela. Sus padres, Benigno María Hernández Manzaneda y Josefa Antonia Cisneros, le transmitieron una profunda fe cristiana y valores de humildad, honradez y solidaridad.</p>
          <p className="text-wrap-normal text-lg">Desde muy pequeño mostró una inteligencia viva y una gran inclinación por el estudio, sorprendiendo a sus maestros con su capacidad de aprendizaje. Su infancia transcurrió en un entorno sencillo, marcado por la religiosidad de su hogar y la vida tranquila de su pueblo andino. Aquellos primeros años lo formaron en la compasión y la sensibilidad hacia los más necesitados, virtudes que lo acompañarían durante toda su vida.</p>
          <p className="text-wrap-normal text-lg">Su carácter bondadoso y su fe inquebrantable en Dios ya se hacían notar en los gestos cotidianos: ayudaba en las tareas familiares, compartía lo poco que tenía con quienes lo necesitaban y desde temprana edad sintió un llamado a servir a los demás.</p>
        </div>
      </div>

      <div
        className="flex items-center space-x-4 w-[90%]"
        ref={el => { sectionsRef.current[1] = el; }}
      >
        <img src={formation} alt="José Gregorio Hernández" className="w-[30%] h-full object-cover rounded" />
        <div className="flex flex-col space-y-4 text-wrap w-[50%]">
          <h1 className="text-2xl font-bold">Formación Académica</h1>
          <p className="text-wrap-normal text-lg">A la edad de trece años, dejó atrás a su familia y su tierra natal para trasladarse a Caracas, con el propósito de continuar sus estudios. Fue una etapa llena de sacrificios, pues la separación del calor de su hogar no fue fácil, pero también fue un período de grandes oportunidades que marcarían su futuro.</p>
          <p className="text-wrap-normal text-lg">En la Universidad Central de Venezuela ingresó a la carrera de Medicina, donde rápidamente se destacó por su brillantez académica y su disciplina. Sus profesores reconocieron en él un talento excepcional y un espíritu incansable por aprender. En 1888, a los 24 años, se graduó con honores de Médico Cirujano.</p>
          <p className="text-wrap-normal text-lg">Su excelencia lo hizo merecedor de una beca para ampliar sus conocimientos en París, la capital mundial de la ciencia médica en aquella época. Allí estudió bajo la guía de reconocidos científicos y se especializó en bacteriología, microbiología, fisiología y medicina experimental. Durante su estancia en Europa conoció los métodos más innovadores, que más tarde llevaría a Venezuela para modernizar la enseñanza y práctica de la medicina.</p>
        </div>
      </div>

      <div
        className="flex items-center space-x-4 w-[90%]"
        ref={el => { sectionsRef.current[2] = el; }}
      >
        <img src={medicine} alt="José Gregorio Hernández" className="w-[30%] h-full object-cover rounded" />
        <div className="flex flex-col space-y-4 text-wrap w-[50%]">
          <h1 className="text-2xl font-bold">Médico y Profesor Universitario</h1>
          <p className="text-wrap-normal text-lg">En 1891, José Gregorio regresó a Venezuela cargado de conocimientos y con una clara misión: transformar la medicina en su país. Fue nombrado profesor en la Universidad Central de Venezuela, donde introdujo asignaturas y métodos modernos que hasta entonces eran desconocidos en el país, como la bacteriología, la histología y la fisiología experimental. También fundó y organizó laboratorios, dando un impulso trascendental al desarrollo científico en la nación.</p>
          <p className="text-wrap-normal text-lg">Pero su grandeza no se limitaba a las aulas ni a la ciencia. Más allá de su brillante carrera académica, era profundamente admirado por su vocación de servicio. Atendía gratuitamente a los enfermos pobres, visitaba a quienes no podían desplazarse hasta un consultorio y en muchas ocasiones costeaba de su propio bolsillo las medicinas. Por esta razón, el pueblo lo bautizó con cariño como “El médico de los pobres”.</p>
          <p className="text-wrap-normal text-lg">Su trato cercano, su humildad y su disposición permanente a ayudar lo convirtieron en un médico diferente: uno que veía en cada paciente no solo un cuerpo enfermo, sino un ser humano que merecía amor y dignidad</p>
        </div>
      </div>

      <div
        className="flex items-center space-x-4 w-[90%]"
        ref={el => { sectionsRef.current[3] = el; }}
      >
        <img src={religion} alt="José Gregorio Hernández" className="w-[30%] h-full object-cover rounded" />
        <div className="flex flex-col space-y-4 text-wrap w-[50%]">
          <h1 className="text-2xl font-bold">Vida Espiritual y Vocación Religiosa</h1>
          <p className="text-wrap-normal text-lg">Aunque la medicina fue su camino principal, José Gregorio también sintió desde joven un profundo llamado religioso. Su deseo de servir a Dios lo llevó en varias ocasiones a ingresar a seminarios y conventos, con la intención de convertirse en sacerdote.</p>
          <p className="text-wrap-normal text-lg">Estuvo en los cartujos de Farneta, Italia, y en el seminario de Caracas, pero problemas de salud y las orientaciones de sus superiores lo hicieron regresar siempre a su vocación médica. Sin embargo, esa búsqueda espiritual no fue en vano: le dio a su vida una dimensión única, donde la ciencia y la fe no eran opuestas, sino complementarias.</p>
          <p className="text-wrap-normal text-lg">Esa unión entre su preparación científica y su profunda religiosidad lo convirtió en un ejemplo extraordinario. Para él, cada paciente era un reflejo del rostro de Cristo, y su consulta médica era también una obra de misericordia.</p>
        </div>
      </div>

      <div
        className="flex items-center space-x-4 w-[90%]"
        ref={el => { sectionsRef.current[4] = el; }}
      >
        <img src={legacy} alt="José Gregorio Hernández" className="w-[30%] object-cover rounded" />
        <div className="flex flex-col space-y-4 text-wrap w-[50%]">
          <h1 className="text-2xl font-bold">Fallecimiento</h1>
          <p className="text-wrap-normal text-lg">El 29 de junio de 1919, a los 54 años de edad, la vida de José Gregorio Hernández tuvo un desenlace inesperado y trágico. Mientras se dirigía a comprar medicinas para una enferma a la que atendía, fue atropellado por un automóvil en La Pastora, Caracas.</p>
          <p className="text-wrap-normal text-lg">Su muerte conmocionó a toda Venezuela. El pueblo, que lo veía no solo como un médico, sino como un verdadero santo en vida, se volcó a las calles a llorar su partida. Aquel día nació una devoción popular que no se ha apagado con el tiempo, sino que se ha fortalecido con las generaciones.</p>
        </div>
      </div>
    </div>
  );
}

export default Biografy;