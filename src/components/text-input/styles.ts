import styled from 'styled-components/native';

// TODO: move out the border color into a constant
export const Input = styled.TextInput`
    width: 100%;
    border: rgba(228, 228, 228, 0.6) 1px solid;
    border-radius: 5px;
    font-size: 13px;
    line-height: 18px;
`;
export const Label = styled.Text`
    width: 100%;
    font-size: 15px;
    font-weight: bold;
    line-height: 20px;
    margin-bottom: 15px;
    text-transform: uppercase;
`;
export const Container = styled.View``;