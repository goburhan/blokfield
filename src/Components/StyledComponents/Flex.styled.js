import styled from 'styled-components'

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content:${(props) => props.justify } ;
  width: ${(props) => props.width};
  margin: ${(props)=> props.margin};

  ul{
    margin:0px 40px 0px 40px;
    &:hover {
      opacity: 0.25;
      background-color:(255,255,255,0.15);
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
        margin:0px 5px 0px 0px;      
        padding:18px;
    }
  }
 

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: row;
    text-align: center;
    
  }

  
`
