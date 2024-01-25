import { HeaderSingleProps } from "./HeaderSingle.types";

function HeaderSingle({imagePokemon}: HeaderSingleProps) {

    console.log('componente')
    console.log(imagePokemon)
    return (
        <>
            <div className="max-w-5xl mx-auto px-4 py-6 flex justify-between items-center">

                <div className="left flex gap-2">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="32" viewBox="0 0 24 32" fill="none">
                            <path d="M12.2305 24.5117L13.0039 23.7383C13.1869 23.5553 13.1869 23.2585 13.0039 23.0754L6.94408 17.0157H20.2812C20.5401 17.0157 20.75 16.8058 20.75 16.5469V15.4532C20.75 15.1943 20.5401 14.9844 20.2812 14.9844H6.94408L13.0039 8.92465C13.1869 8.7416 13.1869 8.4448 13.0039 8.26172L12.2305 7.48836C12.0474 7.30531 11.7506 7.30531 11.5675 7.48836L3.38729 15.6686C3.20424 15.8516 3.20424 16.1484 3.38729 16.3315L11.5675 24.5118C11.7506 24.6948 12.0474 24.6948 12.2305 24.5117Z" fill="white" />
                        </svg>
                    </div>
                    <h1 className="text-white font-bold text-2xl">Charmander</h1>
                </div>
                <div className="right text-white font-bold text-sm">#001</div>


            </div>

            <div className="max-w-5xl mx-auto">
                <div className="flex justify-end top-[-30px] relative">

                    <svg xmlns="http://www.w3.org/2000/svg" width="206" height="208" viewBox="0 0 206 208" fill="none">
                        <g opacity="0.1">
                            <path d="M127.762 104C127.762 117.676 116.676 128.762 103 128.762C89.3244 128.762 78.2381 117.676 78.2381 104C78.2381 90.3244 89.3244 79.2381 103 79.2381C116.676 79.2381 127.762 90.3244 127.762 104Z" fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M103 208C155.393 208 198.738 169.257 205.947 118.857H145.035C138.917 136.169 122.407 148.571 103 148.571C83.5933 148.571 67.0835 136.169 60.9648 118.857H0.0532056C7.26233 169.257 50.6067 208 103 208ZM60.9648 89.1429H0.0532056C7.26233 38.7431 50.6067 0 103 0C155.393 0 198.738 38.7431 205.947 89.1429H145.035C138.917 71.8314 122.407 59.4286 103 59.4286C83.5933 59.4286 67.0835 71.8314 60.9648 89.1429ZM127.762 104C127.762 117.676 116.676 128.762 103 128.762C89.3244 128.762 78.2381 117.676 78.2381 104C78.2381 90.3244 89.3244 79.2381 103 79.2381C116.676 79.2381 127.762 90.3244 127.762 104Z" fill="white" />
                        </g>
                    </svg>

                </div>

                <div className=" mt-[-6em] text-center bg-cover bg-no-repeat bg-center mx-auto relative top-6" style={{ backgroundImage: `url(${imagePokemon})`, minHeight: '230px', maxHeight: '230px', maxWidth: '120px', minWidth: '96px' } }></div>

            </div>


        </>
    )
}

export default HeaderSingle;