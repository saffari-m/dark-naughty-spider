import DateObject from "react-date-object";
import persian from "@utils/persian-calendar";
import persian_fa from "@utils/persian-locale";

const dateTime = new DateObject({ calendar: persian, locale: persian_fa });

export default dateTime;
