export default function Detail() {
    return (
        <div>
            <h2>게시판 상세페이지</h2>
            <div>
                <table>
                    <tr>
                        <td>제목</td>
                        <td>테스트글</td>
                    </tr>
                    <tr>
                        <td>작성자</td>
                        <td>테스트</td>
                    </tr>
                    <tr>
                        <td>작성일</td>
                        <td>2023.03.20</td>
                    </tr>
                    <tr>
                        <td>본문</td>
                        <td>테스트글입니다.!!!</td>
                    </tr>
                </table>
                <div>
                    <button>목록으로</button>
                    <button>수정하기</button>
                    <button>삭제하기</button>
                </div>
            </div>
            <div>
                <input type="text" />
                <div>
                    <div>홍길동</div>
                    <div>테스트 댓글입니다.!!</div>
                </div>
            </div>
        </div>
    )
}