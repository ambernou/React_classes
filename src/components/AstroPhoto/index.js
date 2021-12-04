import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAstroInfo } from "../../store/astroinfo/actions";
import { selectAstroInfo, selectAstroInfoError, selectAstroInfoLoading } from "../../store/astroinfo/selectors";

export const AstroPhotoAPI = () => {
    const dispatch = useDispatch();
    const astroInfo = useSelector(selectAstroInfo);
    const error = useSelector(selectAstroInfoError);
    const loading = useSelector(selectAstroInfoLoading);

    console.log('astroinfo: ', astroInfo);
    // const apiUrl2 = "https://apodapi.herokuapp.com/api/";
    // https://apodapi.herokuapp.com/api/?count=1

    const requestAstroInfo = async () => {
        dispatch(getAstroInfo());
    };

    useEffect(() => {
        requestAstroInfo();
    }, []);
    
    

    return (
        <React.Fragment>
            <h2>The most beautiful astronomical photographs in the world</h2>
            {loading ? (
                    <Spinner animation="border" variant="primary" />
                ) : (
                <>
                    <button onClick={requestAstroInfo}>Request!</button>
                    {!!error && <h3>ERROR {error}</h3>}

                    {astroInfo.map((el) => (
                        <div key={el.title}>
                            <h3>{el.title}</h3>
                            <img src={el.url} />
                            <h3>{el.description}</h3>
                        </div>
                    ))}

                    {/* <h3>{astroInfo[0].title}</h3> */}
                    {/* <img src={astroInfo[0].url} />
                    <h3>{astroInfo[0].description}</h3> */}

                    {/* <h3>"{astroInfo.title}"</h3>
                    <img src={astroInfo.url} width="400" alt="astro_photo" />
                    <h3>{astroInfo.description}</h3> */}
                </>)
            }
        </React.Fragment>
    )
;}
