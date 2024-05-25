from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from app.utils.vulnerability_analyzer import analyze_code, generate_patch

class CodeRequest(BaseModel):
    code: str


class AnalysisResponse(BaseModel):
    vulnerabilities: str


class PatchResponse(BaseModel):
    patched_code: str


router = APIRouter()


@router.post("/analyze", response_model=AnalysisResponse)
async def analyze(request: CodeRequest):
    code = request.code
    if not code:
        raise HTTPException(status_code=400, detail="No code provided")

    vulnerabilities = analyze_code(code)
    return AnalysisResponse(vulnerabilities=vulnerabilities)


@router.post("/patch", response_model=PatchResponse)
async def patch(request: CodeRequest):
    code = request.code
    if not code:
        raise HTTPException(status_code=400, detail="No code provided")

    patched_code = generate_patch(code)
    return PatchResponse(patched_code=patched_code)
