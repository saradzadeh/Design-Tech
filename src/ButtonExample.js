import React from "react";
import PropTypes from "prop-types";
import { Link, Flex, Box } from "theme-ui";
import Icon from "../../1-Elements/Icon";

const Button = (props) => {
  const { children, color, backgroundColor, isRound, isSmall, isFull, isText, isOutlined, icon, sx, href, ...remainingProps } = props;

  const radius = isRound ? "50%" : "40px";
  let iconSize = 20;
  let paddingX = "var(--spacing-lg)";
  let paddingY = "calc(var(--spacing-sm) + var(--spacing-xs))";

  if (isSmall || isText) {
    iconSize = 12;
    paddingX = "var(--spacing-sm)";
  }

  if (isRound) {
    iconSize = 40;
    paddingX = "var(--spacing-sm)";
    paddingY = "var(--spacing-sm)";
  }

  if (isRound && isSmall) {
    iconSize = 20;
  }

  return (
    <Link
      href={href}
      sx={{
        borderRadius: radius,
        px: paddingX,
        py: paddingY,
        boxShadow: backgroundColor && !isText && !isOutlined ? "raised" : "",
        display: isFull ? "block" : "inline-block",
        variant: "text.elem01",
        textDecoration: "none",

        ...sx,
        ...(!isText &&
          !isOutlined && {
            backgroundColor: backgroundColor,
          }),
        ...(isOutlined && {
          border: `1px solid ${color}`,
        }),
      }}
      {...remainingProps}
    >
      <Flex
        sx={{
          alignItems: "center",
          justifyContent: "center",
          color: color,
        }}
      >
        {icon && (
          <Box
            sx={{
              pr: isRound ? "0px" : "sm",
            }}
          >
            <Icon type="glyphs" name={icon} width={iconSize} height={iconSize} color={color} />
          </Box>
        )}
        {children && !isRound && children}
      </Flex>
    </Link>
  );
};

Button.defaultProps = {
  children: null,
  color: "var(--purple-01)",
  backgroundColor: "var(--teal-02)",
  isRound: false,
  isSmall: false,
  isFull: false,
  isText: false,
  icon: null,
  sx: null,
  href: "#",
};

Button.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  isRound: PropTypes.bool,
  isSmall: PropTypes.bool,
  isFull: PropTypes.bool,
  isText: PropTypes.bool,
  icon: PropTypes.string,
  sx: PropTypes.object,
  href: PropTypes.string,
};

export default Button;

const Examples = () => {
  return (
    <div>
      <Button>Aloha</Button>;<Button icon="Search">Search</Button>;
      <Button icon="Search" isFull>
        Search
      </Button>
      <Button isRound icon="Link" />
      <Button isRound isSmall icon="Link" />;
      <Button icon="Search" isSmall backgroundColor={null}>
        Search
      </Button>
      <Button icon="Search" color="var(--red-01)" isOutlined>
        Search
      </Button>
    </div>
  );
};
