import styled from 'styled-components'

export const NavStyle = styled.section `

.header{
    background:#4F1EE2FF;
}
.header .header-container{
    display:flex;
    padding:30px 40px;
    justify-content: space-between;
    align-items:center;

}
.header .logo{
    font-weight:700;
    color:#fff;
    font-size:2rem;
}
.header ul{
    display:flex;
}
.header .link{
    font-size:1.5rem;
    padding:10px;
    color:#00ffff;
}
.header .link:hover{
    border-bottom:2px solid #fff;
    cursor:pointer;
}

`