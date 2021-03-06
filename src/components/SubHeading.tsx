import React from 'react';
import { Text, Box, Flex, Grid, Image, Link } from '@chakra-ui/core';
import { shortEther, toBN, toWei, formatAssetUrl } from 'utils';

import imgETHLogo from 'assets/images/common/ethereum-eth-logo.png';
import imgETHLogoWhite from 'assets/images/common/ethereum-eth-logo-white.png';
import imgLidLogo from 'assets/images/common/logo-lid.png';
import imgDepositor from 'assets/images/common/depositor.png';
import imgClock from 'assets/images/common/Timer_2x.png';

import { DappMetaData } from 'types';

import EndTimer from './EndTimer';
import StartTimer from './StartTimer';
import RefundTimer from './RefundTimer';

interface ISubHeading {
  isConnected: boolean;
  totalEth: string;
  totalShares: string;
  stakingLid: string;
  totalDepositors: string;
  accountEthDeposit: string;
  accountShares: string;
  meta: DappMetaData;
  expiryTimestamp: number | null;
  hardcap: string;
  isActive: boolean;
  isEnded: boolean;
  startTime: number;
  accessTime: number;
  refundTime: number;
  softcap: string;
  softCapReached: boolean;
}

const SubHeadings: React.FC<ISubHeading> = ({
  isConnected,
  totalEth,
  totalDepositors,
  accountEthDeposit,
  accountShares,
  totalShares,
  stakingLid,
  meta,
  expiryTimestamp,
  hardcap,
  isActive,
  isEnded,
  startTime,
  accessTime,
  refundTime,
  softcap,
  softCapReached
}) => {
  const { addresses } = meta;

  return (
    <Box
      w="100%"
      m="0"
      p={['20px', '20px', '0px']}
      pt="0px"
      pb="20px"
      bg="lid.bgMed"
      position="relative"
    >
      <Box
        position="absolute"
        zIndex={1}
        left="0px"
        right="0px"
        bottom="0px"
        height="100px"
        bg="lid.bg"
      />
      <Flex
        w="100%"
        maxW="1200px"
        align="center"
        ml="auto"
        mr="auto"
        p="0px"
        pt="20px"
        pb="20px"
        position="relative"
        zIndex={2}
      >
        <Grid
          w="100%"
          gap="20px"
          templateRows={['repeat(6, 1fr)', 'repeat(2, max-content)']}
          templateColumns={['auto', 'repeat(3, minmax(0, 1fr))']}
        >
          <Box
            w="100%"
            borderRadius="5px"
            p="25px"
            border="solid 1px"
            borderColor="lid.stroke"
            bg="lid.bg"
          >
            <Text fontSize="18px" m="0" p="0" color="lid.fgMed">
              {`Verified ${meta.tokenSymbol} Presale Contract`}
            </Text>
            {addresses.presale ? (
              <Link
                wordBreak="break-word"
                color="lid.brand"
                href={'https://etherscan.io/address/' + addresses.presale}
                mt="15px"
                display="block"
              >
                {addresses.presale}
              </Link>
            ) : (
              <Text>TBD</Text>
            )}
          </Box>
          <Box
            w="100%"
            border="solid 1px"
            borderColor="lid.stroke"
            color="white"
            borderRadius="5px"
            p="25px"
            background="linear-gradient(0deg, rgba(12,101,235,1) 0%, rgba(28,158,247,1) 100%)"
          >
            <Image
              src={imgETHLogoWhite}
              alt="eth logo"
              w="auto"
              h="25px"
              display="inline-block"
              position="relative"
              top="-3px"
            />
            <Text ml="10px" mt="5px" color="lid.bg" display="inline-block">
              Your ETH Deposits
            </Text>
            <Text fontSize="38px" w="100%" fontWeight="bold">
              {shortEther(accountEthDeposit)}
            </Text>
          </Box>
          <Box
            w="100%"
            border="solid 1px"
            borderColor="lid.stroke"
            color="white"
            borderRadius="5px"
            p="25px"
            background="linear-gradient(0deg, rgba(12,101,235,1) 0%, rgba(28,158,247,1) 100%)"
          >
            <Image
              src={formatAssetUrl(meta.project, 'logo.png')}
              alt="token logo"
              w="auto"
              h="25px"
              display="inline-block"
              position="relative"
              top="-3px"
            />
            <Text ml="10px" mt="5px" color="lid.bg" display="inline-block">
              {`Your ${meta.tokenSymbol} Tokens`}
            </Text>
            <Text fontSize="38px" w="100%" fontWeight="bold">
              {totalShares !== '0'
                ? shortEther(
                    toBN(accountShares)
                      .mul(toBN(toWei(meta.totalPresale)))
                      .div(toBN(totalShares))
                      .toString()
                  )
                : '0'}
            </Text>
          </Box>
          <Box
            w="100%"
            border="solid 1px"
            borderColor="lid.stroke"
            color="lid.fg"
            borderRadius="5px"
            p="25px"
            bg="lid.bg"
          >
            <Image
              src={imgDepositor}
              alt="depositor"
              w="auto"
              h="25px"
              display="inline-block"
              position="relative"
              top="-3px"
            />
            <Text ml="10px" mt="5px" color="lid.fgMed" display="inline-block">
              Total Presale Depositors
            </Text>
            <Text fontSize="38px" w="100%" fontWeight="bold" color="lid.brand">
              {totalDepositors}
            </Text>
          </Box>
          <Box
            w="100%"
            border="solid 1px"
            borderColor="lid.stroke"
            color="lid.fg"
            borderRadius="5px"
            p="25px"
            bg="lid.bg"
          >
            <Image
              src={imgETHLogo}
              alt="eth logo"
              w="auto"
              h="25px"
              display="inline-block"
              position="relative"
              top="-3px"
            />
            <Text ml="10px" mt="5px" color="lid.fgMed" display="inline-block">
              Total ETH Deposited
            </Text>
            <Text fontSize="38px" w="100%" fontWeight="bold" color="lid.brand">
              {shortEther(totalEth)}
            </Text>
          </Box>
          <Box
            w="100%"
            border="solid 1px"
            borderColor="lid.stroke"
            color="lid.fg"
            borderRadius="5px"
            p="25px"
            bg="lid.bg"
          >
            <Image
              src={formatAssetUrl(meta.project, 'logo.png')}
              alt="token logo"
              w="auto"
              h="25px"
              display="inline-block"
              position="relative"
              top="-3px"
            />
            <Text ml="10px" mt="5px" color="lid.fgMed" display="inline-block">
              {`Total Presale ${meta.tokenSymbol}`}
            </Text>
            <Text fontSize="38px" w="100%" fontWeight="bold" color="lid.brand">
              {shortEther(toWei(meta.totalPresale))}
            </Text>
          </Box>

          <Box
            w="100%"
            border="solid 1px"
            borderColor="lid.stroke"
            color="lid.fg"
            borderRadius="5px"
            p="25px"
            bg="lid.bg"
          >
            <Image
              src={imgLidLogo}
              alt="Lid Website"
              w="auto"
              h="25px"
              display="inline-block"
              position="relative"
              top="-3px"
            />
            <Text ml="10px" mt="5px" color="lid.fgMed" display="inline-block">
              Your Staking Lid Tokens
            </Text>
            <Text fontSize="38px" w="100%" fontWeight="bold" color="lid.brand">
              {shortEther(stakingLid)}
            </Text>
          </Box>

          <Box
            w={['100%', '205%']}
            border="solid 1px"
            borderColor="lid.stroke"
            color="lid.fg"
            borderRadius="5px"
            p="25px"
            bg="lid.bg"
          >
            <Image
              src={imgClock}
              alt="img clock"
              w="auto"
              h="25px"
              display="inline-block"
              position="relative"
              top="-3px"
            />

            {!isConnected && (
              <Text ml="10px" mt="5px" color="lid.fgMed" display="inline-block">
                Connect to your web3 wallet to see timer
              </Text>
            )}

            {isConnected && !isActive && (
              <StartTimer
                startTime={startTime}
                accessTime={accessTime}
                meta={meta}
                stakingLid={stakingLid}
              />
            )}

            {isConnected && isActive && isEnded && (
              <Text ml="10px" mt="5px" color="lid.fgMed" display="inline-block">
                Presale is ended
              </Text>
            )}

            {isConnected && isActive && !isEnded && !softCapReached && (
              <RefundTimer
                expiryTimestamp={refundTime}
                softcap={softcap}
                meta={meta}
              />
            )}

            {isConnected && isActive && !isEnded && softCapReached && (
              <EndTimer
                expiryTimestamp={expiryTimestamp}
                hardcap={hardcap}
                meta={meta}
              />
            )}
          </Box>
        </Grid>
      </Flex>
    </Box>
  );
};

export default SubHeadings;
