import styled from "styled-components";

export const DotLampa = styled.span`
  width: 2%;
  height: 5%;
  background-color: #fff;
  box-shadow: 0px 0px 12px 3px #fff;
  border-radius: 50%;
  position: absolute;
  top: ${(props) => props.top || 0};
  left: ${(props) => props.left || 0};
`;

const Comp24StyleWrapper = styled.div`
    @import url('https://db.onlinewebfonts.com/c/2791267c488b942eb80f4f69ea85603e?family=MrAlex-Regular');
  width: 100%;
  height: 120px;
  position: relative;
  
  .wrap{
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    width: 100%;
    height: 100%;
    background-color: #0cbfe9;
    transform: rotateX(70deg);
    div {
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      width: 100%;
      height: 100%;
      background-color: #002;
      transform: translateY(-2px);
      display: flex;
      align-items: center;
      justify-content: center;
      div {
        clip-path: polygon(
          25% 0%, 
          75% 0%,
          100% 50%,
          75% 100%,
          25% 100%,
          0% 50%
        );
        width: 95%;
        height: 95%;
        background-color: #002a90;
        transform: translateY(-8px);
        position: relative;
        div {
          clip-path: polygon(
            25% 0%,
            75% 0%,
            100% 50%,
            75% 100%,
            25% 100%,
            0% 50%
          );
          width: 85%;
          height: 100%;
          background-color: #0cbfe9;
          transform: translateY(-10px) rotateX(40deg);
          div {
            clip-path: polygon(
              25% 0%,
              75% 0%,
              100% 50%,
              75% 100%,
              25% 100%,
              0% 50%
            );
            width: 100%;
            height: 100%;
            background-color: #002a90;
            transform: translateY(-2px);
            div {
              clip-path: polygon(
                25% 0%,
                75% 0%,
                100% 50%,
                75% 100%,
                25% 100%,
                0% 50%
              );
              width: 80%;
              height: 100%;
              background-color: #0cbfe9;
              transform: translateY(-15px) rotateX(45deg);
              div {
                position: relative;
                clip-path: polygon(
                  25% 0%,
                  75% 0%,
                  100% 50%,
                  75% 100%,
                  25% 100%,
                  0% 50%
                );
                width: 100%;
                height: 100%;
                background-color: #002a90;
                transform: translateY(-5px);
                span {
                  position: absolute;
                  bottom: -20%;
                  left: 50%;
                  transform: translateX(-50%);
                  width: 20%;
                  height: 20%;
                  box-shadow: 0px -65px 40px 20px #fff;
                  animation: lampa 2s linear infinite;
                  @keyframes lampa {
                    from {
                      box-shadow: 0px -70px 25px 8px #fff;
                    }
                    to {
                      box-shadow: 0px -70px 45px 28px #fff;
                    }
                  }
                }
                div {
                  width: 30%;
                  height: 30%;
                  background-color: #fff;
                }
              }
            }
          }
        }
      }
    }
  }
  .soya{
    position: absolute;
    top: -50%;
    left: 50%;
    transform: translateX(-50%);
    clip-path: polygon(0 0, 100% 0, 85% 100%, 15% 100%);
    width: 90%;
    height: 100%;
    background: linear-gradient(0deg, rgba(0, 42, 144, 0.4), rgba(0, 0, 0, 0));
  }
  .soya1{
    position: absolute;
    top: -40%;
    left: 50%;
    transform: translateX(-50%);
    clip-path: polygon(0 0, 100% 0, 85% 100%, 15% 100%);
    width: 110%;
    height: 100%;
    background: linear-gradient(0deg, rgba(0, 42, 144, 0.4), rgba(0, 0, 0, 0));
    display: flex;
    justify-content: center;
    align-items: center;
    div{
        padding-bottom: 15px;
        .number{
            color: #fff;
            margin: 0;
            text-align: center;
            font-size: 2rem;
            word-wrap: break-word;
            letter-spacing: 2px;
            font-family: 'MrAlex-Regular', serif;
        }
        .title{
            color: #fff;
            margin: 0;
            text-align: center;
            font-size: 1rem;
            word-wrap: break-word;
            letter-spacing: 2px;
            font-family: 'MrAlex-Regular', serif;
        }
    }
  }
`;
export default Comp24StyleWrapper;
