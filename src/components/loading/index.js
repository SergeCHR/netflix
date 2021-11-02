import { Spinner, LockBody, Picture, ReleaseBody } from "./loading"

export const Loading = ({src, ...restProps}) => {
    return <Spinner {...restProps}>
        <LockBody/>
        <Picture src={`/images/users/${src}.png`}/>
    </Spinner>
}
Loading.ReleaseBody = () => {
    return <ReleaseBody/>
}