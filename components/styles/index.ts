import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Width60 = styled.div`
    width: 60%;
`;

export const ListDiv = styled.div<{ check: boolean }>`
    border: 1px solid black;
    padding: 20px;

    ${({ check }) => {
        return check
            ? `background-color: lightgrey; text-decoration: line-through;`
            : null;
    }}
`;

export const LightText = styled.div`
    text-align: right;
`;

export const CenterText = styled.div`
    text-align: center;
`;

export const StyleHeader = styled(CenterText)`
    font-size: 3em;
    font-weight: 700;
    color: #595959;
    margin: 20px;
`;
