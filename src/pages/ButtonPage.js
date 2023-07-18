import Button from '../components/Button';
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';

function ButtonPage() {

  const handleClick = () => {};

  return (
    <div>
      <div>
        <Button danger outline className="mb-5" onClick={handleClick}>
          <GoBell className="mr-1"/>
          Click Me!
        </Button>
      </div>
      <div>
        <Button warning outline className="mb-5">
        <GoCloudDownload />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button success className="mb-5">
        <GoDatabase />
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary className="mb-5">
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded className="mb-5">
          Click Here!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;