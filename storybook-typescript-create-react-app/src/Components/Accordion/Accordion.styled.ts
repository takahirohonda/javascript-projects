import styled from 'styled-components/macro'

export const StyledAccordionButtonWrapper = styled.div`
  border: none;
  padding: 0;
  margin: 0;
  display: flex;
  height: fit-content;
  width: fit-content;
`

export const StyledAccordionWrapper = styled.div`
  display: flex;
  order: 999;
  flex: 0 0 100%;
  height: fit-content;
  width: 100%;
  margin: 0;
  padding: 0;
  & > div {
    width: 100%;
  }
`
