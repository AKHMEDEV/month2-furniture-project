import styled from "styled-components";

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 20px;
`;

export const Breadcrumb = styled.div`
  font-size: 13px;
  color: #454545;
  margin-bottom: 10px;
`;

export const Title = styled.h1`
  font-size: 64px;
  font-weight: bold;
  margin-bottom: 20px;
`;
export const StyledTableWrapper = styled.div`
  background: #f2f2f2;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 30px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #00000020;
`;

export const TableHeader = styled.th`
  font-family: Manrope;
  font-weight: 500;
  font-style: Medium;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #454545;
  padding: 10px 0;
`;

export const TableData = styled.td`
  padding: 20px 5px;
  align-items: center;
  vertical-align: middle;
  font-size: 14px;
`;

export const ProductImageWrapaer = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  display: block;
  margin: 0 auto;
`;
export const ProductImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  display: block;
  margin: 0 auto;
`;

export const ProductName = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const QuantityButton = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  background: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    border-color: red;
    color: red;
  }
`;
export const QuantityButtonPlus = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  background: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    border-color: green;
    color: green;
  }
`;

export const QuantityValue = styled.span`
  width: 24px;
  text-align: center;
`;

export const TrashIcon = styled.button`
  font-size: 16px;
  background: none;
  border: none;
  cursor: pointer;
  color: #888;

  &:hover {
    border-color: red;
    color: red;
  }
`;

export const Section = styled.div`
  background: #f2f2f2;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 30px;
`;

export const SectionTitle = styled.h2`
  font-family: "Manrope", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 32px;
  line-height: 110%;
  letter-spacing: 0;
  text-transform: capitalize;
`;

export const InputGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 16px;
  border: 1px solid #454545;
  width: 100%;
`;

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 80px;
  padding: 10px;
  border-radius: 16px;
  border: 1px solid #454545;
  margin-top: 20px;
`;

export const PaymentInfo = styled.div`
  margin-bottom: 20px;
`;

export const PaymentRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const TotalPrice = styled.div`
  font-size: 22px;
  font-weight: bold;
  text-align: right;
`;
export const BuyWrapper = styled.div`
  align-items: center;
  gap: 10px;
  display: flex;
`;

export const BuyButton = styled.button`
  max-width: 30%;
  background: #000;
  color: #fff;
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background: #333;
  }
`;

export const FooterText = styled.p`
  text-align: center;
  font-size: 12px;
  color: #666;
  margin-top: 10px;
`;
