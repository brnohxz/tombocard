import React, {useState} from "react";
import {Swiper, SwiperProps, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
//
import "./styles.css";

// import required modules
import { Navigation } from "swiper";
import { styled } from "@mui/material";

export default function App() {
    const StyledSwiper = styled((props:SwiperProps)=><Swiper allowTouchMove={false} simulateTouch={false} navigation={true}
    modules={[Navigation]}
    className="mySwiper" {...props}/>)
    ({
        height:'150px',
        width:'100%',
        minWidth:'310px',
        maxWidth:'440px',
        '& .swiper-button-next':{
            color:'#AAC52D',
            width:'10px',
            transform: 'scaleY(3) scale(0.5)',
            '-webkit-tap-highlight-color': 'transparent'

},
        '& .swiper-button-prev':{
            color:'#AAC52D',
            width:'10px',
            transform: 'scaleY(3) scale(0.5)',
            '-webkit-tap-highlight-color': 'transparent'
        },
    })

    const ProductCardContainer = styled('div')(({theme})=>({
        height: "125px",
        width:'371px',
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.16)",
        borderRadius: "16px",
        display:'flex',
        margin:'0 30px',
        '& .img':{
            display: 'flex',
            alignItems: 'center',
            img:{
                width: '116px',
                height: '116px'
            }
        },
        '& .description':{
            width:'100%',
            textAlign:'end',
            display:'flex',
            flexDirection:'column',
            alignItems:'flex-end',
            padding: '6px 12px 7px 0px',
            '&-header':{
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '16px',
                paddingBottom:'5px',
                maxWidth:'200px'
            },
            '& .composition':{
                display: 'flex',
                height:'100%',
                justifyContent:'space-between',
                flexDirection: 'column',
                '&-wrapper':{
                    fontWeight: 300,
                    fontSize: '12px',
                    lineHeight: '14px',
                    maxWidth:'225px',
                    maxHeight:'45px',
                    overflow:'auto'
                },
                '& .additional':{
                    display:'flex',
                    flexDirection:'column',
                    '& .size-per-weight':{
                        fontWeight: 400,
                        fontSize: '11px',
                        lineHeight: '13px',
                        color:'#828282',
                        paddingBottom: '3px',
                    },
                    '& .nutritional-btn':{
                        fontWeight: 400,
                        fontSize: '11px',
                        lineHeight: '13px',
                        color:'#FF4B12'
                    }
                }
            },
            '& .nutritional':{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
                '&-tooltip':{
                    display: 'flex',
                    gap: '10px',
                    alignItems: 'center',
                    fontWeight: 400,
                    fontSize: '11px',
                    lineHeight: '13px',
                    paddingBottom:'5px',
                    '& .part':{
                        background: '#aac52d',
                        padding: '2px 5px',
                        borderRadius: '10px',
                        color: 'white',
                    },
                    '& .total':{

                    }
                },
                '&-values':{
                    display:'flex',
                    gap:'10px',
                    paddingBottom:'7px',
                    flexWrap:'wrap',
                    justifyContent:'flex-end',
                    div:{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '2px',
                        fontSize: '11px',
                        lineHeight: '13px',
                        '&:nth-of-type(1)':{
                            fontWeight: 500,
                            color:'#4F4F4F'
                        },
                        '&:nth-of-type(2)':{
                            fontWeight: 400,
                            color:'#828282'
                        }
                    }
                },
                '&-btn':{
                    fontWeight: 400,
                    fontSize: '10px',
                    lineHeight: '13px',
                    color:'#FF4B12',
                    cursor:'pointer',
                    '-webkit-tap-highlight-color': 'transparent'
                }
            }
        },
        [theme.breakpoints.down(425)]:{
            '& .description':{
                '&-header':{
                },
                '& .composition':{
                    '&-wrapper':{
                    },
                    '& .additional':{
                        '& .size-per-weight':{
                        },
                        '& .nutritional-btn':{
                        }
                    }
                },
                '& .nutritional':{
                    '&-tooltip':{
                        '& .part':{
                        },
                        '& .total':{
                        }
                    },
                    '&-values':{
                        div:{
                            fontSize: '9px',
                            lineHeight: '10px',
                            '&:nth-of-type(1)':{
                            },
                            '&:nth-of-type(2)':{
                            }
                        }
                    },
                    '&-btn':{
                    }
                }
            },
        },
        [theme.breakpoints.down(375)]:{
            '& .description':{
                '&-header':{
                    fontSize: '10px',
                    lineHeight: '14px',
                },
                '& .composition':{
                    '&-wrapper':{
                        fontSize: '10px',
                    },
                    '& .additional':{
                        '& .size-per-weight':{
                        },
                        '& .nutritional-btn':{
                        }
                    }
                },
                '& .nutritional':{
                    '&-tooltip':{
                        '& .part':{
                        },
                        '& .total':{
                        }
                    },
                    '&-values':{
                        gap:0,
                        padding:0,
                        div:{
                            padding:'0 2px',
                            fontSize: '9px',
                            lineHeight: '10px',
                            '&:nth-of-type(1)':{
                            },
                            '&:nth-of-type(2)':{
                            }
                        }
                    },
                    '&-btn':{
                    }
                }
            },
        }
    }))
  const SlideProductCard = () => {
        const [state, setState] = useState(true)
      return (
          <ProductCardContainer>
              <div className="img">
                  <img src="https://102922.selcdn.ru/nomenclature_images/fe470000-906b-0025-2b75-08d966355f64/d83e31e7-f3a9-4d4a-ae62-e91c234d81d9.png" alt="pizza"/>
              </div>
              <div className="description">
                  <div className="description-header">Пицца «Фермерская»
                      или длинное название</div>
                  {
                      state ?
                      <div className="composition">
                      <div  className="composition-wrapper">Соус, сыр, салями, ветчина, колбаса копченая, оливки, лук, еще что-то, что входит в состав
                          Соус, сыр, салями, ветчина, колбаса копченая, оливки, лук, еще что-то, что входит в состав. Соус, сыр, салями, ветчина, колбаса копченая, оливки, лук, еще что-то, что входит в состав
                          Соус, сыр, салями, ветчина, колбаса копченая, оливки, лук, еще что-то, что входит в состав. Соус, сыр, салями, ветчина, колбаса копченая, оливки, лук, еще что-то, что входит в состав
                          Соус, сыр, салями, ветчина, колбаса копченая, оливки, лук, еще что-то, что входит в состав .Соус, сыр, салями, ветчина, колбаса копченая, оливки, лук, еще что-то, что входит в состав
                          Соус, сыр, салями, ветчина, колбаса копченая, оливки, лук, еще что-то, что входит в состав .Соус, сыр, салями, ветчина, колбаса копченая, оливки, лук, еще что-то, что входит в состав
                          Соус, сыр, салями, ветчина, колбаса копченая, оливки, лук, еще что-то, что входит в состав</div>
                      <div className="additional">
                          <div className="size-per-weight"> 23 см/800г</div>
                          <div onClick={()=>setState(!state)} className="nutritional-btn">Пищевая ценность</div>
                      </div>
                  </div>
                      :
                      <div className="nutritional">
                      <div className="nutritional-tooltip">
                          <div className="part">100 г</div>
                          <div className="total">Всего</div>
                      </div>
                      <div className="nutritional-values">
                          <div className="nutritional-value">
                              <div>кДж</div>
                              <div>2430</div>
                          </div>
                          <div className="nutritional-value">
                              <div>Ккал</div>
                              <div>580</div>
                          </div>
                          <div className="nutritional-value">
                              <div>Жиры</div>
                              <div>28</div>
                          </div>
                          <div className="nutritional-value">
                              <div>Белки</div>
                              <div>26</div>
                          </div>
                          <div className="nutritional-value">
                              <div>Углеводы</div>
                              <div>58</div>
                          </div>
                      </div>
                      <div onClick={()=>setState(!state)} className="nutritional-btn">Состав</div>
                  </div>
                  }
              </div>
          </ProductCardContainer>
      )
  }
  return (
      <>
        <StyledSwiper>
          <SwiperSlide>
            <SlideProductCard />
          </SwiperSlide>
        </StyledSwiper>
          <StyledSwiper>
              <SwiperSlide>
                  <SlideProductCard />
              </SwiperSlide>
              <SwiperSlide>
                  <SlideProductCard />
              </SwiperSlide>
              <SwiperSlide>
                  <SlideProductCard />
              </SwiperSlide>
          </StyledSwiper>
      </>
  );
}
