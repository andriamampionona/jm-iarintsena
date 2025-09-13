import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function BibleVerseSwiper() {
  const verses = [
    {
      book: "Aggée",
      chapter: 1,
      verse: "8",
      text: "Montez sur la montagne, apportez du bois, Et bâtissez la maison: J'en aurai de la joie, et je serai glorifié, Dit l'Éternel.",
      translation: "Louis Segond 1910",
    },
    {
      book: "Aggée",
      chapter: 1,
      verse: "2-4",
      text: "Ainsi parle l'Éternel des armées: Ce peuple dit: Le temps n'est pas venu, le temps de rebâtir la maison de l'Éternel. C'est pourquoi la parole de l'Éternel leur fut adressée par Aggée, le prophète: Est-ce le temps pour vous d'habiter vos demeures lambrissées, Quand cette maison est détruite?",
      translation: "Louis Segond 1910",
    },
    {
      book: "Aggée",
      chapter: 2,
      verse: "9",
      text: "La gloire de cette dernière maison sera plus grande que celle de la première, Dit l'Éternel des armées; Et c'est dans ce lieu que je donnerai la paix, Dit l'Éternel des armées.",
      translation: "Louis Segond 1910",
    },
    {
      book: "Jérémie",
      chapter: 29,
      verse: "10-11",
      text: "Car ainsi parle l'Éternel: Quand soixante-dix ans seront écoulés pour Babylone, je me souviendrai de vous, et j'accomplirai à votre égard ma bonne parole, en vous ramenant dans ce lieu. Car je connais les projets que j'ai formés sur vous, dit l'Éternel, projets de paix et non de malheur, afin de vous donner un avenir et de l'espérance.",
      translation: "Louis Segond 1910",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-green-50 to-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif font-bold text-green-800 mb-3">
            Paroles de Dieu après la destruction du Temple
          </h2>
          <p className="text-gray-600 text-lg">Promesses de restauration et de reconstruction</p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{ 
            clickable: true,
            el: '.swiper-pagination',
            type: 'bullets',
          }}
          autoplay={{ 
            delay: 8000, 
            disableOnInteraction: false 
          }}
          loop={true}
          className="relative"
        >
          {verses.map((verse, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 text-center h-96 flex flex-col justify-center items-center transform transition-all duration-300 hover:shadow-xl">
                <div className="mb-6">
                  <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                    {verse.book} {verse.chapter}:{verse.verse}
                  </span>
                </div>
                
                <p className="md:text-xl font-serif text-gray-800 italic leading-relaxed mb-6 px-4">
                  &quot;{verse.text}&quot;
                </p>
                
                <p className="text-sm text-gray-500 border-t border-gray-100 pt-4 w-full max-w-xs mx-auto">
                  {verse.translation}
                </p>
              </div>
            </SwiperSlide>
          ))}
          
          {/* Navigation buttons */}
          <div className="swiper-button-next !text-green-700 after:!text-2xl"></div>
          <div className="swiper-button-prev !text-green-700 after:!text-2xl"></div>
          
          {/* Pagination */}
          <div className="swiper-pagination !relative !mt-8"></div>
        </Swiper>

        <div className="text-center mt-12 max-w-2xl mx-auto">
          <p className="text-gray-600 leading-relaxed">
            Après la destruction du Temple de Jérusalem en 586 av. J.-C., Dieu a envoyé des prophètes 
            comme Aggée et Jérémie pour encourager son peuple à reconstruire et lui promettre un avenir 
            rempli d&apos;espérance.
          </p>
        </div>
      </div>
    </div>
  );
}