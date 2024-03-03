import React from "react";
import { styled } from "@linaria/react";

import Button from "@components/button";
import Icon from "@components/icon";
import Row from "@components/row";
import Col from "@components/col";

function Buttons() {
  return (
    <>
      <Container>
        <h3>Button</h3>
        <Row gutter={16} align="center">
          <Col flex="150px">Type</Col>
          <Col>
            <Button>عنوان</Button>
            <Button type="primary">عنوان</Button>
            <Button type="text">عنوان</Button>
            <Button type="link">عنوان</Button>
          </Col>
        </Row>
        <Row gutter={16} align="center">
          <Col flex="150px">Shape</Col>
          <Col>
            <Button>عنوان</Button>
            <Button shape="round">عنوان</Button>
            <Button shape="circle">عنوان</Button>
          </Col>
        </Row>
        <Row gutter={16} align="center">
          <Col flex="150px">Loading</Col>
          <Col>
            <Button loading>عنوان</Button>
            <Button type="primary" loading>
              عنوان
            </Button>
            <Button type="text" loading>
              عنوان
            </Button>
            <Button type="link" loading>
              عنوان
            </Button>
          </Col>
        </Row>
        <Row gutter={16} align="center">
          <Col flex="150px">Disabled</Col>
          <Col>
            <Button disabled>عنوان</Button>
            <Button type="primary" disabled>
              عنوان
            </Button>
            <Button type="text" disabled>
              عنوان
            </Button>
            <Button type="link" disabled>
              عنوان
            </Button>
          </Col>
        </Row>
        <Row gutter={16} align="center">
          <Col flex="150px">Ghost</Col>
          <Col>
            <Button ghost>عنوان</Button>
            <Button type="primary" ghost>
              عنوان
            </Button>
          </Col>
        </Row>
        <Row gutter={16} align="center">
          <Col flex="150px">Ghost Disabled</Col>
          <Col>
            <Button ghost disabled>
              عنوان
            </Button>
            <Button type="primary" ghost disabled>
              عنوان
            </Button>
          </Col>
        </Row>
        <Row gutter={16} align="center">
          <Col flex="150px">With Suffix Icon</Col>
          <Col>
            <Button suffix={<Icon icon="live" solid />}>عنوان</Button>
            <Button
              type="primary"
              suffix={<Icon icon="dots-grid" solid />}
              icon={<Icon icon="play" solid />}
            >
              عنوان
            </Button>
            <Button
              type="primary"
              ghost
              suffix={<Icon icon="dots-grid" solid />}
              icon={<Icon icon="play" solid />}
            >
              عنوان
            </Button>
          </Col>
        </Row>
        <Row gutter={16} align="center">
          <Col flex="150px">With Icon</Col>
          <Col>
            <Button type="text" icon={<Icon icon="play" solid />}>
              عنوان
            </Button>
            <Button type="link" icon={<Icon icon="play" solid />}>
              عنوان
            </Button>
          </Col>
        </Row>
        <Row gutter={16} align="center">
          <Col flex="150px">Size - Small</Col>
          <Col>
            <Button size="small" type="primary">
              عنوان
            </Button>
            <Button
              size="small"
              type="primary"
              icon={<Icon icon="play" solid />}
            >
              عنوان
            </Button>
            <Button
              size="small"
              type="primary"
              shape="round"
              icon={<Icon icon="play" solid />}
            >
              عنوان
            </Button>
            <Button
              size="small"
              type="primary"
              icon={<Icon icon="play" solid />}
            />
            <Button
              size="small"
              type="primary"
              shape="round"
              icon={<Icon icon="play" solid />}
            />
            <Button
              size="small"
              type="primary"
              shape="circle"
              icon={<Icon icon="play" solid />}
            />
          </Col>
        </Row>
        <Row gutter={16} align="center">
          <Col flex="150px">Size - Default</Col>
          <Col>
            <Button type="primary">عنوان</Button>
            <Button type="primary" icon={<Icon icon="play" solid />}>
              عنوان
            </Button>
            <Button
              type="primary"
              shape="round"
              icon={<Icon icon="play" solid />}
            >
              عنوان
            </Button>
            <Button type="primary" icon={<Icon icon="play" solid />} />
            <Button
              type="primary"
              shape="round"
              icon={<Icon icon="play" solid />}
            />
            <Button
              type="primary"
              shape="circle"
              icon={<Icon icon="play" solid />}
            />
          </Col>
        </Row>
        <Row gutter={16} align="center">
          <Col flex="150px">Size - Large</Col>
          <Col>
            <Button size="large" type="primary">
              عنوان
            </Button>
            <Button
              size="large"
              type="primary"
              icon={<Icon icon="play" solid />}
            >
              عنوان
            </Button>
            <Button
              size="large"
              type="primary"
              shape="round"
              icon={<Icon icon="play" solid />}
            >
              عنوان
            </Button>
            <Button
              size="large"
              type="primary"
              icon={<Icon icon="play" solid />}
            />
            <Button
              size="large"
              type="primary"
              shape="round"
              icon={<Icon icon="play" solid />}
            />
            <Button
              size="large"
              type="primary"
              shape="circle"
              icon={<Icon icon="play" solid />}
            />
          </Col>
        </Row>
        <Row gutter={16} align="center">
          <Col flex="150px">Block</Col>
          <Col flex="250px">
            <Button size="large" type="primary" block>
              عنوان
            </Button>
          </Col>
          <Col flex="250px">
            <BtnStyled
              size="large"
              type="primary"
              suffix={<Icon icon="dots-grid" solid />}
              ghost
              block
            >
              عنوان
            </BtnStyled>
          </Col>
        </Row>
      </Container>
    </>
  );
}

const Container = styled.div`
  text-align: right;
  margin-bottom: 1rem;

  > h3 {
    font-size: 2rem;
    margin-bottom: 0.25rem;
  }
  h6 {
    line-height: initial;
    width: 100px;
    min-width: 100px;
  }
  > div {
    display: flex;
    margin-bottom: 8px;

    > div:last-child > * {
      margin-left: 0.5rem;
    }
  }
`;

const BtnStyled = styled(Button)`
  && {
    text-align: right;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.75rem;

    .tw-icon {
      font-size: 1.5rem;
    }
  }
`;

export default Buttons;
