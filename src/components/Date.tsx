import { format, formatISO } from "date-fns";

type Props = {
  date: Date;
  color: string;
  emoji?: boolean;
};
export default function Date({ date, color, emoji }: Props) {
  return (
    <time dateTime={formatISO(date)}>
      <span>
        {emoji ? "🗓" + " " : null}
        {format(date, "LLLL d, yyyy")}
      </span>
      <style jsx>
        {`
          span {
            color: ${color};
          }
        `}
      </style>
    </time>
  );
}
