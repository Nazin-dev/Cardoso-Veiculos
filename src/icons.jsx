/* Icon set — Bootstrap Icons 1.11.3
   Wrapper React mantém interface (size, style) dos ícones anteriores.
   O prop `stroke` é ignorado (não se aplica a icon font). */

const BI = ({ name, size = 20, style = {}, className = '' }) => (
  <i
    className={`bi bi-${name}${className ? ' ' + className : ''}`}
    style={{ fontSize: size, lineHeight: 1, display: 'inline-flex', alignItems: 'center', ...style }}
    aria-hidden="true"
  />
);

const IconShield     = (p) => <BI name="shield-check" {...p} />;
const IconHandshake  = (p) => <BI name="arrow-left-right" {...p} />;
const IconWrench     = (p) => <BI name="wrench-adjustable" {...p} />;
const IconCalculator = (p) => <BI name="calculator" {...p} />;
const IconCar        = (p) => <BI name="car-front-fill" {...p} />;
const IconQuote      = (p) => <BI name="quote" {...p} />;
const IconMap        = (p) => <BI name="map" {...p} />;
const IconClock      = (p) => <BI name="clock" {...p} />;
const IconPhone      = (p) => <BI name="telephone-fill" {...p} />;
const IconMail       = (p) => <BI name="envelope-fill" {...p} />;
const IconWhatsApp   = (p) => <BI name="whatsapp" {...p} />;
const IconInstagram  = (p) => <BI name="instagram" {...p} />;
const IconArrow      = (p) => <BI name="arrow-right" {...p} />;
const IconCheck      = (p) => <BI name="check2" {...p} />;
const IconStar       = (p) => <BI name="star-fill" {...p} />;
const IconMenu       = (p) => <BI name="list" {...p} />;
const IconClose      = (p) => <BI name="x-lg" {...p} />;
const IconChevron    = (p) => <BI name="chevron-right" {...p} />;
const IconLeaf       = (p) => <BI name="flower1" {...p} />;
const IconPin        = (p) => <BI name="geo-alt-fill" {...p} />;
const IconSpark      = (p) => <BI name="stars" {...p} />;

Object.assign(window, {
  IconShield, IconHandshake, IconWrench, IconCalculator, IconCar, IconQuote,
  IconMap, IconClock, IconPhone, IconMail, IconWhatsApp, IconInstagram,
  IconArrow, IconCheck, IconStar, IconMenu, IconClose, IconChevron, IconLeaf, IconPin, IconSpa