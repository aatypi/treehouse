import { Badge } from "./Badge";

export function PropertyInformation () {
    const text ="lorem ";
      return (
      <div className="property-information">
        <Badge title="24/7 help desk" text={text}/>
        <Badge title="Essentials at the properties" text={text}/>
        <Badge title="offical health standards" text={text}/>
        </div>
      );
  }
