export function BlueFlame() {


    return (
        <video autoPlay muted loop width='192px' height='230px'>
            {/*<source src='./assets/videos/blue_fire.webm' type="video/webm"/>*/}
            <source src='./assets/videos/blue_fire.mp4' type="video/mp4"/>
            <source src='./assets/videos/blue_fire.mov' type="video/quicktime"/>
            Sorry, your browser doesn't support videos.
        </video>
    );
}