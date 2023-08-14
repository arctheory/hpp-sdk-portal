import classNames from "classnames";

interface LogoProps {
    small?: boolean
}

function Logo({ small = false }: LogoProps) {
    return (
        <div className={classNames("flex items-center divide-x", { "scale-75": small })}>
            <div className="pr-5 flex items-center justify-center gap-2">
                <img src="/assets/dbs-logo.png" className="w-12 h-12" />
                <h1 className="font-serif">DBS</h1>
            </div>
            <h1 className="font-light pl-5">HPP</h1>
        </div>
    );
}

export default Logo;
