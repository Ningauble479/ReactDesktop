import { useAdContext } from "../../Context/AdContext"; 
import { TallAd, WideAd, SquareAd } from "../../Components/Ads/Ads";

export const AdSystem = () => {
    
    const { seenAds, clickedAds, unseenAds } = useAdContext();
    return (
        <div>
            <h1>Ad System</h1>
            <div>
                <h2>Unseen Ads</h2>
                <div className="AdContainer">
                    {unseenAds.length > 0 ? unseenAds.map((ad) => (
                        <TallAd key={ad.id} ad={ad} temp={true}/>
                    )) : <div>No unseen ads</div>}
                </div>
            </div>
            <div>
                <h2>Seen Ads</h2>
                <div className="AdContainer">
                    {seenAds.length > 0 ? seenAds.map((ad) => (
                        <TallAd key={ad.id} ad={ad} temp={true}/>
                    )) : <div>No ads seen</div>}
                </div>
            </div>
            <div>
                <h1>Clicked Ads</h1>
                <div className="AdContainer">
                    {clickedAds.length > 0 ? clickedAds.map((ad) => (
                        <div key={ad.id}>{ad.title}</div>
                    )) : <div>No ads clicked</div>}
                </div>
            </div>
        </div>
    )
}
