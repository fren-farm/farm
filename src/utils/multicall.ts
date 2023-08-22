import { ethers } from 'ethers'
import { getMulticallContract } from 'utils/contractHelpers'
import { AbiItem } from 'web3-utils'
import { Interface } from '@ethersproject/abi'
import { getWeb3 } from 'utils/web3'
import MultiCallAbi from 'config/abi/Multicall.json'
import { getMulticallAddress } from 'utils/addressHelpers'

export interface Call {
  address: string // Address of the contract
  name: string // Function name on the contract (example: balanceOf)
  params?: any[] // Function params
}

interface MulticallOptions {
  requireSuccess?: boolean
}

const multicall = async (abi: any[], calls: Call[]) => {
  // try {
  //   const multi = getMulticallContract()
  //   const itf = new ethers.utils.Interface(abi)

  //   const calldata = calls.map((call) => [call.address.toLowerCase(), itf.encodeFunctionData(call.name, call.params)])
  //   const { returnData } = await multi.aggregate(calldata)

  //   const res = returnData.map((call, i) => itf.decodeFunctionResult(calls[i].name, call))

  //   return res
  // } catch (error) {
  //   throw new Error(error)
  // }
  const web3 = getWeb3()
  const multi = new web3.eth.Contract((MultiCallAbi as unknown) as AbiItem, getMulticallAddress())
  const itf = new Interface(abi)

  const calldata = calls.map((call) => [call.address.toLowerCase(), itf.encodeFunctionData(call.name, call.params)])
  const { returnData } = await multi.methods.aggregate(calldata).call()
  const res = returnData.map((call, i) => itf.decodeFunctionResult(calls[i].name, call))

  return res
}

/**
 * Multicall V2 uses the new "tryAggregate" function. It is different in 2 ways
 *
 * 1. If "requireSuccess" is false multicall will not bail out if one of the calls fails
 * 2. The return inclues a boolean whether the call was successful e.g. [wasSuccessfull, callResult]
 */
export const multicallv2 = async (
  abi: any[],
  calls: Call[],
  options: MulticallOptions = { requireSuccess: true },
): Promise<any> => {
  const { requireSuccess } = options
  const multi = getMulticallContract()
  const itf = new ethers.utils.Interface(abi)

  const calldata = calls.map((call) => [call.address.toLowerCase(), itf.encodeFunctionData(call.name, call.params)])
  const returnData = await multi.tryAggregate(requireSuccess, calldata)
  const res = returnData.map((call, i) => {
    const [result, data] = call
    return result ? itf.decodeFunctionResult(calls[i].name, data) : null
  })

  return res
}

export default multicall
