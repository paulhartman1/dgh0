import { MockContext, Context, createMockContext } from '@/context'

let mockCtx;
let ctx;

beforeEach(() => {
  mockCtx = createMockContext()
  ctx = mockCtx
describe("Images API", () => {
    describe("GET /api/images", () => {
      it('should return 200', () => {
        expect(1).toBe(1);
      });
    });
    }); 
});
