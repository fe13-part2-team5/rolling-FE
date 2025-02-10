import styled from "styled-components";
import PrimaryButtonWrapper from "../components/Buttons/PrimaryButton.style";

export const Wrapper = styled.div`
    width: ${(props) => props.width || '100%'};
    height: ${(props) => props.height || 'auto'};
    
    &.main-wrapper, &.section-wrap {
        ${({ theme }) => theme.flexLayout("column", "initial")};
    }

    &.section-wrap {
        gap: 30px;
        margin: 0 auto;
        margin-top: 60px;
    }

    &.txt-box-01, &.txt-box-02, &.txt-area {
        ${({ theme }) => theme.flexLayout("column", "initial", "initial")};
    }

    &.txt-box-01, &.txt-box-02 {
        gap: 16px;
    }

    &.txt-area {
        gap: 8px;
    }

    &.txt-box-01 {
        width: 324px;
        margin-left: 60px;
    }

    &.txt-box-02 {
        width: 348px;
    }

    &.img-box, &.buttonWrapper {
        ${({ theme }) => theme.flexLayout};
    }

    &.img-box {
        width: 720px;
        height: 204px;
    }

    &.fixed-right-img-box {
        margin-left: auto;
    }

    &.buttonWrapper {
        margin-top: 24px;
    }

    @media (max-width: 768px) {
        &.section-wrap {
            margin-top: 49px;
            padding: 0 24px;
        }

        &.txt-box-01, &.txt-box-02 {
            width: 100%;
        }

        &.buttonWrapper {
            margin-top: 48px;
            padding: 24px;
        }

        &.txt-box-01, &.txt-box-02 {
            margin-left: 0;
            border-left: 40px solid ${({ theme }) => theme.colors.surface};
            border-right: 40px solid ${({ theme }) => theme.colors.surface};
        }

        &.img-box {
            width: 100%;
            height: height: 100%;
            padding: 16px 28px;
        }
    }

    @media (max-width: 360px) {
        &.section-wrap {
            gap: 24px;
            margin-top: 42px;
            padding: 0 20px;
        }

        &.txt-box-01, &.txt-box-02 {
            border-left: 24px solid ${({ theme }) => theme.colors.surface};
            border-right: 24px solid ${({ theme }) => theme.colors.surface};
        }

        &.txt-area {
            gap: 4px;
        }

        &.buttonWrapper {
            margin-top: 37px;
            padding: 24px 20px;
        }

        &.img-box {
            padding: 0;
        }
    }
`;

export const Content = styled.div`

    &.section {
        display: flex;
        width: 1200px;
        height: 324px;
        padding-top: 60px;
        border-radius: 16px;
        background-color: ${({ theme }) => theme.colors.surface};
    }

    &.reverse-section {
        ${({ theme }) => theme.flexLayout("row-reverse", "flex-end", "initial")}
    }

    &.img-01 {
        width: 640px;
        height: 172px;
        background-image: url('/assets/mainImg01.png');
        background-size: cover;
    }

    &.img-02 {
        width: 470px;
        height: 204px;
        background-image: url('/assets/mainImg02.png');
        background-size: cover;
    }

    @media (max-width: 768px) {
        &.section {
            ${({ theme }) => theme.flexLayout("column")};
            gap: 36px;
            width: 100%;
            height: 440px;
            padding: 40px 0;
        }

        &.img-01 {
            width: 100%;
            height: 100%;
            background-position: center;
        }

        &.img-02 {
            background-position: center;
        }
    }

    @media (max-width: 360px) {
        &.section {
            gap: 50px;
            height: 352px;
            padding: 0;
            padding-top: 24px;
            border-radius: 20px;
        }

        &.reverse-section {
            gap: 48px;
        }

        &.img-01 {
            height: 90px;
        }

        &.img-02 {
            width: 261px;
            height: 113px;
        }
    }
`;

export const Line = styled.div`
    position: sticky;
    top: 65px;
    width: 100%;
    border-top: 1px solid #EDEDED;
`;

export const Label = styled.div`
    ${({ theme }) => theme.flexLayout}
    width: 80px;
    height: 32px;
    border-radius: 50px;
    background-color: ${({ theme }) => theme.colors.purple[600]};
    ${({ theme }) => theme.fonts['14b']}
    color: ${({ theme }) => theme.colors.white};
`;

export const H2 = styled.h2`
    ${({ theme }) => theme.fonts['24b']}
    color: ${({ theme }) => theme.colors.gray[900]};

    @media (max-width: 768px) {
        word-break: keep-all;

        br {
            display: none;
        }
        
        &.txt-box-02-h2 {
            br {
                display: block;
            }
        }
    }

    @media (max-width: 360px) {
        ${({ theme }) => theme.fonts['18b']}
    }
`;

export const P = styled.p`
    ${({ theme }) => theme.fonts['18r']}
    color: ${({ theme }) => theme.colors.gray[500]};

    @media (max-width: 768px) {
        word-break: keep-all;
    }

    @media (max-width: 360px) {
        ${({ theme }) => theme.fonts['15r']}
    }
`;

export const MoveListButton = styled(PrimaryButtonWrapper)`
    width: 280px;

    @media (max-width: 768px) {
        width: 100%;
    }
`;