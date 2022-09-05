import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { forwardRef } from "react";
import FlipMove from "react-flip-move"


  const Thumbnail = forwardRef(({result}, ref ) =>{
    const base_url = "https://image.tmdb.org/t/p/original/";
    // console.log(result)
    return (
      <FlipMove className="p-2  transition duration-200 ease-in transform sm:hover:scale-105  group cursor-pointer hover:z-50">
        <a
          href={`https://watchseries.pics/?s=${
            result.title || result.original_name
          }`}
          target="_blank"
        >
          
          <Image
            layout="responsive"
            src={`${base_url}${result.backdrop_path || result.poster_path}`}
            width={1920}
            height={1080}
          />

          <div className="p-2 ">
            <p className=" truncate max-w-md">{result.overview}</p>

            <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
              {result.title || result.original_name}
            </h2>

            <p className="flex items-center p-4 opacity-0 group-hover:opacity-100">
              {result.media_type} {result.release_date || result.first_air_date}
              {" • "}
              <ThumbUpIcon className="h-5 mx-2" />
              {" • "}
              {result.vote_count}
            </p>
          </div>
        </a>
      </FlipMove>
    );
    
});

export default Thumbnail
