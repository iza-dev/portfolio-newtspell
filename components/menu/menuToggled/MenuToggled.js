import { bool } from 'prop-types'
import { StyledMenuToggled } from './MenuToggled.styled';

export default function MenuToggled({ open }) {
    return (
        <StyledMenuToggled  open={open}>
            <a href="/work">Work</a>
            <a href="/aboutme">About me</a>
            <a href="/contact">Contact</a>
        </StyledMenuToggled>
    );
}
MenuToggled.propTypes = {
    open: bool.isRequired,
  }