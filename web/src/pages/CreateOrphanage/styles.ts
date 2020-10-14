import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
`;

export const SideBar = styled.aside`
  position: fixed;
  height: 100%;
  padding: 32px 24px;
  background: linear-gradient(329.54deg, #15b6d6 0%, #15d6d6 100%);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  > img {
    width: 48px;
  }
`;

export const SideBarFooter = styled.aside`
  a,
  button {
    width: 48px;
    height: 48px;

    border: 0;

    background: #12afcb;
    border-radius: 16px;

    cursor: pointer;

    transition: background-color 0.2s;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  a:hover,
  button:hover {
    background: #17d6eb;
  }
`;

export const Main = styled.main`
  flex: 1;
`;

export const FormCreate = styled.form`
  width: 700px;
  margin: 64px auto;

  background: #ffffff;
  border: 1px solid #d3e2e5;
  border-radius: 20px;

  padding: 64px 80px;

  overflow: hidden;

  fieldset {
    border: 0;

    legend {
      width: 100%;

      font-size: 32px;
      line-height: 34px;
      color: #5c8599;
      font-weight: 700;

      border-bottom: 1px solid #d3e2e5;
      margin-bottom: 40px;
      padding-bottom: 24px;
    }
  }

  fieldset + fieldset {
    margin-top: 80px;
  }

  .input-block {
    label {
      display: flex;
      color: #8fa7b3;
      margin-bottom: 8px;
      line-height: 24px;

      span {
        font-size: 14px;
        color: #8fa7b3;
        margin-left: 24px;
        line-height: 24px;
      }
    }

    input,
    textarea {
      width: 100%;
      background: #f5f8fa;
      border: 1px solid #d3e2e5;
      border-radius: 20px;
      outline: none;
      color: #5c8599;
    }

    input {
      height: 64px;
      padding: 0 16px;
    }

    textarea {
      min-height: 120px;
      max-height: 240px;
      resize: vertical;
      padding: 16px;
      line-height: 28px;
    }

    .new-image {
      width: 100%;
      height: 64px;
      background: #f5f8fa;
      border: 1px dashed #96d2f0;
      border-radius: 20px;
      cursor: pointer;
    }

    .button-select {
      button {
        height: 64px;
        width: 50%;
        background: #f5f8fa;
        border: 1px solid #d3e2e5;
        color: #5c8599;
        cursor: pointer;
      }

      button:first-child {
        border-radius: 20px 0px 0px 20px;
      }

      button:last-child {
        border-radius: 0 20px 20px 0;
        border-left: 0;
      }

      .active {
        background: #edfff6;
        border: 1px solid #a1e9c5;
        color: #37c77f;
      }
    }
  }

  .input-block + .input-block {
    margin-top: 24px;
  }

  .confirm-button {
    margin-top: 64px;

    width: 100%;
    height: 64px;
    border: 0;
    cursor: pointer;
    background: #3cdc8c;
    border-radius: 20px;
    color: #ffffff;
    font-weight: 800;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: background-color 0.2s;

    svg {
      margin-right: 16px;
    }
  }

  .confirm-button:hover {
    background: #36cf82;
  }
`;
