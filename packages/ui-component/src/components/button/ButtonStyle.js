import { css } from "@linaria/atomic";
import theme from "@theme/default";

const { button } = theme;

// =========================
// Button Base
// =========================
const CButton = css`
  

  > span {
    display: inline-block;
  }

  > .tw-icon {
    vertical-align: -0.3125em;
  }

  &:not([disabled]):hover {
    text-decoration: none;
  }

  &,
  :active,
  :focus {
    outline: 0;
  }
`;

// =========================
// Type
// =========================
const CButtonDefault = css`
  color: ${button.defaultColor};
  border-color: ${button.defaultBorderColor};
  background: ${button.defaultBackgroundColor};

  :hover {
    color: ${button.defaultHoverColor};
    border-color: ${button.defaultHoverBackgroundColor};
    background: ${button.defaultHoverBackgroundColor};
  }
`;

const CButtonPrimary = css`
  color: ${button.primaryColor};
  border-color: ${button.primaryBackgroundColor};
  background: ${button.primaryBackgroundColor};
  text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);

  :hover {
    color: ${button.primaryHoverColor};
    border-color: ${button.primaryHoverBackgroundColor};
    background: ${button.primaryHoverBackgroundColor};
  }
`;

const CButtonText = css`
  color: ${button.textColor};
  border-color: ${button.textBorderColor};
  background: 0 0;

  :hover {
    color: ${button.textHoverColor};
    background: ${button.textHoverBackgroundColor};
    border-color: ${button.textHoverBackgroundColor};
  }
`;

const CButtonLink = css`
  color: ${button.linkColor};
  border-color: ${button.linkBorderColor};
  background: 0 0;

  :hover,
  :active {
    border-color: ${button.linkHoverBackgroundColor};
  }

  :hover {
    color: ${button.linkHoverColor};
    background: 0 0;
  }
`;

// =========================
// Size
// =========================
const CButtonMiddle = css`
  height: ${button.defaultHeight};
  padding: ${button.defaultPadding};
  font-size: ${button.defaultFontSize};
  border-radius: ${button.defaultBorderRadius};

  a& {
    line-height: 1.375rem;
  }
`;

const CButtonLarge = css`
  height: ${button.largeHeight};
  padding: ${button.largePadding};
  font-size: ${button.largeFontSize};
  border-radius: ${button.largeBorderRadius};

  a& {
    line-height: 1.625rem;
  }
`;

const CButtonSmall = css`
  height: ${button.smallHeight};
  padding: ${button.smallPadding};
  font-size: ${button.smallFontSize};
  border-radius: ${button.smallBorderRadius};

  a& {
    line-height: 1.425rem;
  }
`;

// =========================
// Shape
// =========================
const CButtonCircle = css`
  padding-right: 0;
  padding-left: 0;
  text-align: center;
  border-radius: 50%;
`;

const CButtonCircleMiddle = css`
  min-width: ${button.defaultHeight};
`;
const CButtonCircleLarge = css`
  min-width: ${button.largeHeight}; ;
`;
const CButtonCircleSmall = css`
  min-width: ${button.smallHeight};
`;

const CButtonRoundMiddle = css`
  height: ${button.defaultHeight};
  padding: ${button.defaultPadding};
  font-size: ${button.defaultFontSize};
  border-radius: ${button.defaultHeight};
`;
const CButtonRoundLarge = css`
  height: ${button.largeHeight};
  padding: ${button.largePadding};
  font-size: ${button.largeFontSize};
  border-radius: ${button.largeHeight};
`;
const CButtonRoundSmall = css`
  height: ${button.smallHeight};
  padding: ${button.smallPadding};
  font-size: ${button.smallFontSize};
  border-radius: ${button.smallHeight};
`;

// =========================
// Block
// =========================
const CButtonBlock = css`
  width: 100%;
`;

// =========================
// Ghost
// =========================
const CButtonGhost = css`
  background: 0 0;
`;

const CButtonGhostPrimary = css`
  color: ${button.primaryGhostColor};
  border-color: ${button.primaryGhostBorderColor};
  text-shadow: none;

  :hover,
  :focus {
    color: ${button.primaryGhostHoverColor};
    border-color: ${button.primaryGhostBorderColor};
    background: ${button.primaryGhostHoverBackgroundColor};
  }
`;

const CButtonGhostDefault = css`
  color: ${button.defaultGhostColor};
  border-color: ${button.defaultGhostBorderColor};

  :hover,
  :focus {
    color: ${button.defaultGhostHoverColor};
    border-color: ${button.defaultGhostBorderColor};
    background: ${button.defaultGhostHoverBackgroundColor};
  }
`;

// =========================
// IconButton
// =========================
const CButtonIcon = css`
  vertical-align: middle;

  > span {
    display: flex;
    justify-content: center;
  }
`;

const CButtonIconRound = css`
  width: auto;
`;

const CButtonIconMiddle = css`
  width: ${button.defaultHeight};
  min-width: ${button.defaultHeight};
  height: ${button.defaultHeight};
  padding: 0.25rem 0;
  font-size: ${button.defautlIconOnlyFontSize};
  > * {
    font-size: ${button.defautlIconOnlyFontSize};
  }
`;

const CButtonIconLarge = css`
  width: ${button.largeHeight};
  min-width: ${button.largeHeight};
  height: ${button.largeHeight};
  padding: 0.375rem 0;
  font-size: ${button.largelIconOnlyFontSize};

  > * {
    font-size: ${button.largelIconOnlyFontSize};
  }
`;

const CButtonIconSmall = css`
  width: ${button.smallHeight};
  min-width: ${button.smallHeight};
  height: ${button.smallHeight};
  padding: 0;
  font-size: ${button.smallIconOnlyFontSize};

  > * {
    font-size: ${button.smallIconOnlyFontSize};
  }
`;

// =========================
// Disabled
// =========================
const CButtonDisabled = css`
  &[disabled] {
    cursor: not-allowed;
  }
`;

// using only for default & primary type
const CButtonDisabledAll = css`
  &[disabled],
  &[disabled]:hover,
  &[disabled]:focus,
  &[disabled]:active {
    color: ${button.defaultDisableColor};
    border-color: ${button.defaultDisableBorderColor};
    background: ${button.defaultDisableBackgroundColor};
    text-shadow: none;
  }
`;

// using only for text & link type
const CButtonDisabledOutline = css`
  &[disabled],
  &[disabled]:hover,
  &[disabled]:focus,
  &[disabled]:active {
    color: ${button.textualDisableColor};
    border-color: ${button.textualDisableBackgroundColor};
    background: 0 0;
    text-shadow: none;
  }
`;

// using for ghosted default and ghosted primary type
const CButtonDisabledAllGhosted = css`
  &[disabled],
  &[disabled]:hover,
  &[disabled]:focus,
  &[disabled]:active {
    color: ${button.defaultDisableColor};
    border-color: ${button.defaultDisableBorderColor};
    background: 0 0;
    text-shadow: none;
  }
`;

// =========================
// Button inner content
// =========================
const CButtonContent = css`
  display: inline-block;

  /* &:not(:only-child) {
    margin-right: 0.375rem;
  } */
`;

// =========================
// Loading
// =========================
const CLoadingIcon = css`
  font-family: "tw-icon" !important;

  display: inline-block;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  text-rendering: auto;
  line-height: 1;
  vertical-align: -0.125em;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  animation: spin 1s linear infinite;
  animation-direction: reverse;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  } ;
`;

export {
  CButtonContent,
  CLoadingIcon,
  CButton,
  CButtonDefault,
  CButtonPrimary,
  CButtonText,
  CButtonLink,
  CButtonMiddle,
  CButtonLarge,
  CButtonSmall,
  CButtonCircle,
  CButtonCircleMiddle,
  CButtonCircleLarge,
  CButtonCircleSmall,
  CButtonRoundMiddle,
  CButtonRoundLarge,
  CButtonRoundSmall,
  CButtonBlock,
  CButtonGhost,
  CButtonGhostPrimary,
  CButtonGhostDefault,
  CButtonIcon,
  CButtonIconRound,
  CButtonIconMiddle,
  CButtonIconLarge,
  CButtonIconSmall,
  CButtonDisabled,
  CButtonDisabledAll,
  CButtonDisabledOutline,
  CButtonDisabledAllGhosted,
};
