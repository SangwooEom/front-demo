export default function Join() {
    return (
        <div>
            <h2>회원가입 페이지</h2>
            <div>
                <div>
                    <h4>아이디</h4>
                    <input type="text" />
                </div>
                <div>
                    <h4>비밀번호</h4>
                    <input type="password" />
                </div>
                <div>
                    <h4>비밀번호 확인</h4>
                    <input type="password" />
                </div>
                <div>
                    <h4>이름</h4>
                    <input type="text" />
                </div>
                <div>
                    <button>회원가입</button>
                    <button>취소</button>
                </div>
            </div>
        </div>
    )
}