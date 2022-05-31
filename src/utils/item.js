import styled from "styled-components";

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 100%;
  background-color: #683bb7;
  color: #fff;
  margin: 15px;
  font-size: 4em;
`;

export const Styles = styled.div`
  padding-top: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid #dee2e6;
    border-collapse: separate;
    font-size: 13.5px;
    width: 100%;
    text-align: center;
  }
  thead {
    tr:first-of-type {
      th {
        white-space: nowrap;
        width: 110x;
        border: 0;
        font-size: 20px;
      }
    }
    th {
      font-size: 18px;
      white-space: nowrap;
      i {
        color: rgba(155, 155, 155, 0.8);
      }
    }
  }
  tr:nth-child(even) {
    background: #eaeaea99;
  }
  tr {
    .descript {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; /* number of lines to show */
      line-clamp: 2;
      -webkit-box-orient: vertical;
      line-height: 20px;
      max-height: 50px;
    }
    .edit {
      width: 40px;
    }
    .qrCode {
      img {
        width: 150px;
        height: 150px;
      }
      cursor: pointer;
    }
    .btn-danger {
      margin: 10px 0;
    }
  }
`;

export const Tab = styled.button`
  padding: 15px 10px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  border-bottom: 2px solid transparent;
  transition: ease border-bottom 250ms;
  font-size: 1.2rem;
  margin: 10px;
  min-width: 120px;
  ${({ active }) =>
    active
      ? `border-bottom: 2px solid #1F5E72;
    opacity: 1;
    color: #1F5E72;
    font-weight: bold;
  `
      : `
      color: #0073cf  ;
    @media (max-width: 768px) {
      color: #808080;
    }`}
`;
