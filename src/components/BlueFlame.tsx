export function BlueFlame({isSecondStage}: { isSecondStage: boolean }) {

    return (
        <video key={isSecondStage ? 'animus_blue' : 'blue_fire'} autoPlay muted loop width='192px' height='230px'>
            {
                isSecondStage ?
                    <>
                        <source src='./assets/videos/animus_blue.mp4' type="video/mp4"/>
                        <source src='./assets/videos/animus_blue.mov' type="video/quicktime"/>
                    </>
                    :
                    <>
                        <source src='./assets/videos/blue_fire.mp4' type="video/mp4"/>
                        <source src='./assets/videos/blue_fire.mov' type="video/quicktime"/>
                    </>
            }
            Sorry, your browser doesn't support videos.
        </video>
    );
}